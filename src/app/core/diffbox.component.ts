import {ActivatedRoute} from '@angular/router';
import {Input, Component, Optional, OnInit, ViewChild} from '@angular/core';
import {Compiler, NgModule, Directive, ReflectiveInjector, ViewContainerRef} from '@angular/core';
import {ParsedPatchDefinition, SingleChange, LineContent} from './patch-definition';
import {TutorialDefinition} from './tutorial-definition';
import * as _ from 'lodash';
import * as hljs from 'highlight.js';

@Directive({
  selector: '[diffboxCode]'
})
export class DiffBoxCode {
  @Input('diffboxCode') diffboxCode: string;

  constructor(private compiler: Compiler, private vcRef: ViewContainerRef) {
  }

  ngOnChanges() {
    if (!this.diffboxCode || this.diffboxCode === '') {
      return;
    }

    let content = this.diffboxCode.replace(/[{}]/g, (match) => {
      return "<span>{{ '" + match + "' }}</span>";
    });

    @Component({
      selector: 'diffbox-container',
      template: content
    })
    class DynamicComponent {
    }

    @NgModule({
      imports: [],
      declarations: [DynamicComponent]
    })
    class DynamicModule {
    }

    let factories = this.compiler.compileModuleAndAllComponentsSync(DynamicModule);
    const compFactory = factories.componentFactories.find(x => x.componentType === DynamicComponent);
    const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
    this.vcRef.createComponent(compFactory, 0, injector, []);
  }
}

@Component({
  selector: 'diffbox',
  templateUrl: './diffbox.component.html'
})
export class DiffBoxComponent implements OnInit {
  @Input('step') step: string;
  @Optional() @Input('filename') optionalFilename: string;
  @Optional() @Input('hideRemoved') hideRemoved: boolean;
  @Input('tutorial') tutorialName: string;
  @ViewChild('htmlContainer') htmlContainer;

  private diffDetails: ParsedPatchDefinition;
  private tutorialData: TutorialDefinition;
  private files: string[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      let tutorialBundle = data.resolveData.tutorial;
      this.diffDetails = tutorialBundle.steps[this.step];
      this.tutorialData = tutorialBundle.tutorial;

      if (!this.diffDetails) {
        throw new Error(`Unable to find step ${this.step} in you tutorial ${this.tutorialName}!`);
      }

      this.files = Object.keys(this.diffDetails.files);
    });
  }

  getFileModification(filename) {
    return this.diffDetails.files[filename];
  }

  getFileContent(filename) {
    let lines = this.getLines(filename);
    let content = '';

    lines.forEach((line) => {
      content += '<pre class="' + line.cssClass + '">' + line.highlightedContent + '</pre>';
    });

    return content;
  }

  buildGitHubLink(filename: string): string {
    return `http://github.com/${this.tutorialData.gitHub}/commit/${this.diffDetails.sha}`;
  }

  getLineNumbers(filename) {
    const lineRanges = this.getFileModification(filename).map((section) => {
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

  getLines(filename: string) {
    const sectionLines = this.getFileModification(filename).map((section) => {
      let allLines = section.lines.map((line: LineContent) => {
        let highlightedContent = null;

        if (line.content) {
          const ext = _.last(filename.split('.'));
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
        return prev.concat({highlightedContent: '<span class="hljs-comment">...some lines skipped...</span>'}).concat(curr);
      } else {
        return curr;
      }
    }, null);
  }
}
