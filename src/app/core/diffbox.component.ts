import {Input, Inject, Host, Component, forwardRef} from "@angular/core";
import {TutorialRegistryCache} from "./tutorials-registry-cache";
import {ParsedPatchDefinition, SingleChange, LineContent} from "./patch-definition";
import {Observable} from "rxjs";
import {OnInit} from "@angular/core";
import {Optional} from "@angular/core";
import {TutorialBundle, TutorialDefinition} from "./tutorial-definition";
import * as _ from "lodash";
import * as hljs from "highlight.js";

@Component({
  selector: "diffbox",
  template: `
    <div class="diffbox">
        <div class="title-panel">
            <span class="step-number">{{step}}</span> <span class="commit-summary">{{diffDetails.summary}}</span>
            <a target="_blank" class="github-commit-link" [href]="buildGitHubLink()">{{filename}}</a>
        </div>
        <div class="code-container">
            <div class="scroll-container">
                  <div class="line-numbers">
                    <pre *ngFor="let lineNumber of getLineNumbers()" class="line-number">{{lineNumber}}</pre>
                  </div>
                  <div class="code-lines">
                    <pre *ngFor="let line of getLines()" class="" [innerHTML]="line.highlightedContent"></pre>
                  </div>
            </div>
        </div>
    </div>
`
})
export class DiffBoxComponent implements OnInit {
  @Input("step") step: string;
  @Optional() @Input("filename") optionalFilename: string;
  @Input("tutorial") tutorialName: string;

  private diffDetails: ParsedPatchDefinition;
  private filename: string;
  private tutorialData: TutorialDefinition;
  private currentFileModification: Array<SingleChange>;

  constructor(private registry: TutorialRegistryCache) {
  }

  buildGitHubLink(): string {
    return `http://github.com/${this.tutorialData.gitHub}/commit/${this.diffDetails.sha}`;
  }

  getLineNumbers() {
    const lineRanges = this.currentFileModification.map((section) => {
      return _.range(section.lineNumbers.added.start,
        section.lineNumbers.added.start + section.lineNumbers.added.lines);
    });

    return lineRanges.reduce((prev, curr) => {
      if (prev) {
        return prev.concat(" ").concat(curr);
      } else {
        return curr;
      }
    }, null);
  }

  getLines() {
    const sectionLines = this.currentFileModification.map((section) => {
      return section.lines.map((line: LineContent) => {
        let highlightedContent = null;

        if (line.content) {
          const ext = _.last(this.filename.split("."));
          let fileType = ext;

          if (ext === "jsx") {
            fileType = "js";
          } else if (ext === "less") {
            fileType = "css";
          }

          highlightedContent = hljs.highlight(fileType, line.content, true).value;
        }

        // XXX mutating in place, but it's probably OK since the result will
        // always be the same
        line.highlightedContent = highlightedContent || " ";

        return line;
      });
    });

    return sectionLines.reduce((prev, curr) => {
      if (prev) {
        return prev.concat({ highlightedContent: "<span class='hljs-comment'>...some lines skipped...</span>" }).concat(curr);
      } else {
        return curr;
      }
    }, null);
  }

  ngOnInit() {
    let tutorialBundle: TutorialBundle = this.registry.getObject(this.tutorialName);
    this.diffDetails = tutorialBundle.steps[this.step];
    this.tutorialData = tutorialBundle.tutorial;

    if (!this.diffDetails) {
      throw new Error(`Unable to find step ${this.step} in you tutorial ${this.tutorialName}!`);
    }

    if (!this.optionalFilename) {
      let availableFiles = Object.keys(this.diffDetails.files);

      if (availableFiles.length === 1) {
        this.filename = availableFiles[0];
      }
      else if (availableFiles.length === 0) {
        throw new Error(`Something went wrong, unable to find files in your commit ${this.diffDetails.sha}!`);
      }
      else {
        throw new Error(`Multiple files available in commit ${this.diffDetails.sha}, please specify one: ${availableFiles.join(", ")}`);
      }
    }

    this.currentFileModification = this.diffDetails.files[this.filename];
  }
}