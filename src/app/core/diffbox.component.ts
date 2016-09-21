import { ActivatedRoute } from '@angular/router';
import { Renderer, Input, Component, Optional, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { Compiler, NgModule, Directive, ReflectiveInjector, ViewContainerRef } from '@angular/core';
import { ParsedPatchDefinition, SingleChange, LineContent } from './patch-definition';
import { TutorialDefinition } from './tutorial-definition';
import * as _ from 'lodash';
import * as hljs from 'highlight.js';

@Directive({
  selector: '[diffboxCode]'
})
export class DiffBoxCode {
  @Input('diffboxCode') diffboxCode: string;

  constructor(private compiler: Compiler, private vcRef: ViewContainerRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.diffboxCode || this.diffboxCode === '') {
      return;
    }

    let content = this.diffboxCode;

    @Component({
      selector: 'diffbox-container',
      template: content
    })
    class DynamicComponent { }

    @NgModule({
      imports: [],
      declarations: [DynamicComponent]
    })
    class DynamicModule { }

    let factories = this.compiler.compileModuleAndAllComponentsSync(DynamicModule);
    const compFactory = factories.componentFactories.find(x => x.componentType === DynamicComponent);
    const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
    this.vcRef.createComponent(compFactory, 0, injector, []);
  }
}

@Component({
  selector: 'diffbox',
  templateUrl: './diffbox.component.html',
  styleUrls: [
    './diffbox.component.scss'
  ]
})
export class DiffBoxComponent implements OnInit {
  @Input('step') step: string;
  @Optional() @Input('filename') optionalFilename: string;
  @Optional() @Input('hideRemoved') hideRemoved: boolean;
  @Input('tutorial') tutorialName: string;
  @ViewChild('htmlContainer') htmlContainer;

  private diffDetails: ParsedPatchDefinition;
  private filename: string;
  private tutorialData: TutorialDefinition;
  private currentFileModification: Array<SingleChange>;
  private codeContent: string;

  constructor(private compiler: Compiler, private route: ActivatedRoute, private renderer: Renderer) {

  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      let tutorialBundle = data.resolveData.tutorial;
      this.diffDetails = tutorialBundle.steps[this.step];
      this.tutorialData = tutorialBundle.tutorial;

      if (!this.diffDetails) {
        throw new Error(`Unable to find step ${this.step} in you tutorial ${this.tutorialName}!`);
      }

      if (!this.optionalFilename) {
        let availableFiles = Object.keys(this.diffDetails.files);

        if (availableFiles.length === 1) {
          this.filename = availableFiles[0];
        } else if (availableFiles.length === 0) {
          throw new Error(`Something went wrong, unable to find files in your commit ${this.diffDetails.sha}!`);
        } else {
          throw new Error(`Multiple files available in step ${this.step}, please specify one: ${availableFiles.join(', ')}`);
        }
      } else {
        this.filename = this.optionalFilename;
      }

      this.currentFileModification = this.diffDetails.files[this.filename];

      if (!this.currentFileModification) {
        throw new Error(`File ${this.filename} does not exists in commit ${this.diffDetails.sha}`);
      }

      let lines = this.getLines();
      let content = '';

      lines.forEach((line) => {
        content += '<pre class=' + line.cssClass + '>' + line.highlightedContent + '</pre>';
      });

      this.codeContent = content;
    });
  }

  buildGitHubLink(): string {
    return `http://github.com/${this.tutorialData.gitHub}/commit/${this.diffDetails.sha}`;
  }

  getLineNumbers() {
    const lineRanges = this.currentFileModification.map((section) => {
      return _.range(section.lineNumbers.added.start,
        section.lineNumbers.added.start + section.lineNumbers.added.lines);
    });

    return lineRanges.reduce((prev: Array<any>, curr) => {
      if (prev) {
        return prev.concat(' ').concat(curr);
      } else {
        return curr;
      }
    }, null);
  }

  getLines() {
    const sectionLines = this.currentFileModification.map((section) => {
      let allLines = section.lines.map((line: LineContent) => {
        let highlightedContent = null;

        if (line.content) {
          const ext = _.last(this.filename.split('.'));
          let fileType = ext;

          if (ext === 'jsx') {
            fileType = 'js';
          } else if (ext === 'less') {
            fileType = 'css';
          } else if (fileType === 'ts') {
            fileType = 'typescript';
          }

          try {
            highlightedContent = hljs.highlight(fileType, line.content, true).value;
          } catch (e) {
            highlightedContent = line.content;
          }
        }

        line.highlightedContent = highlightedContent || ' ';
        line.cssClass = 'line-' + line.type;

        return line;
      });

      if (this.hideRemoved === false) {
        return allLines;
      } else {
        return allLines.filter(item => item.type !== 'removed');
      }
    });

    return sectionLines.reduce((prev: Array<any>, curr) => {
      if (prev) {
        return prev.concat({ highlightedContent: '<span class="hljs-comment">...some lines skipped...</span>' }).concat(curr);
      } else {
        return curr;
      }
    }, null);
  }
}
