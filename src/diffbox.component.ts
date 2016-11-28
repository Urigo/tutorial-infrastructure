import {ActivatedRoute} from '@angular/router';
import {Input, Component, Optional, OnInit, ViewChild} from '@angular/core';
import {Compiler, NgModule, Directive, ReflectiveInjector, ViewContainerRef} from '@angular/core';
import {ParsedPatchDefinition, LineContent, SingleChange} from './patch-definition';
import {TutorialDefinition} from './tutorial-definition';
import * as _ from 'lodash';
import * as hljs from 'highlight.js';
import {Observable} from 'rxjs';

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
      return '<span>{{ \'' + match + '\' }}</span>';
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
  template: `
<div *ngFor="let filename of files">
  <div class="diffbox" *ngIf="getFileContent(filename) !== ''">
    <div class="title-panel">
      <span class="step-number">{{step}}</span> <span class="commit-summary">{{diffDetails.summary}}</span>
      <a target="_blank" class="github-commit-link" [href]="buildGitHubLink(filename)">{{filename}}</a>
    </div>
    <div class="code-container">
      <div class="scroll-container">
        <div class="line-numbers">
          <pre *ngFor="let lineNumber of getLineNumbers(filename)" class="line-number">{{lineNumber}}</pre>
        </div>
        <div class="line-content" [diffboxCode]="getFileContent(filename)"></div>
      </div>
      <div class="improve-code" *ngIf="(getImproveLink(filename) | async)?.url !== ''">
        <a [href]="(getImproveLink(filename) | async)?.url">Improve this code</a>
      </div>
    </div>
  </div>
</div>`,
  styles: [
    `
.diffbox {
  border: 1px solid #eee;
  -webkit-text-size-adjust: 100%;
  margin: 1.5em 0;
}
.diffbox .title-panel {
  padding: 5px 12px;
  background: #eee;
  border-bottom: solid 1px #eee;
  color: #333;
  overflow: auto;
  font-size: .875rem;
}
.diffbox .title-panel .github-commit-link {
  float: right;
  color: black;
  text-decoration: none;
  border-bottom: none !important;
}
.diffbox .code-container {
  overflow-x: auto;
  position: relative;
  padding: 9px 3px 3px 0;
  background: #f8f8f8;
}
.diffbox .code-container .scroll-container {
  display: inline-block;
  min-width: 100%;
  overflow: hidden;
}
.diffbox .code-container:hover > .improve-code {
  display: block;
}
.diffbox .code-container .improve-code {
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.5);
  padding: 5px;
  cursor: pointer;
}
.diffbox .code-container .line-numbers {
  text-align: right;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  position: absolute;
  width: 25px;
}
.diffbox .code-container .line-numbers .line-number {
  color: #aaa;
  font-style: italic;
  margin: 0 !important;
}

`
  ]
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

  getFileModification(filename): SingleChange[] {
    return this.diffDetails.files[filename];
  }

  getImproveLink(filename): Observable<{ url: string}> {
    if (this.tutorialData && this.tutorialData.improveCodeUrlResolve) {
      const urlObs = this.tutorialData.improveCodeUrlResolve(this.tutorialData, this.diffDetails, filename, this.step);

      if (urlObs) {
        return urlObs;
      }
    }

    return Observable.of({
      url: ''
    });
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
