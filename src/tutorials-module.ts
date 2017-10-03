import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ApiListItems} from './api-list-items.component';
import {ApiVersionsList} from './api-versions-list.component';
import {MarkdownFileViewComponent} from './markdown-file.component';
import {TutorialNavigation} from './tutorial-navigation.component';
import {StepNameDirective} from './tutorial-name.directive';
import {ImproveThisDocLink} from './improve-this-doc.directive';
import {ApiPageComponent} from './api-page.component';
import {TutorialPage} from './tutorial-page.component';
import {TutorialRegistryCache} from './tutorials-registry-cache';
import {PatchLoadResolve} from './patch-load-resolver';
import {StepsTemplatesLoader} from './steps-templates-loader';
import {ActivatedTutorial} from './current-tutorial';
import {StepsUtils} from './step-utils';
import {ApiLoadResolve} from './api-load-resolve';
import {ActivatedApi} from './current-api';
import {StepListComponent} from './steps-list.component';
import {CodeDiffLink} from './tutorial-code-diff.directive';
import {HistoryLink} from './tutorial-history.directive';
import {StepDownloadZipLink} from './tutorial-download-zip.directive';
import {PageTitleService} from './page-title.service';

const exportsAndDeclarations = [
  StepListComponent,
  TutorialPage,
  ApiPageComponent,
  ImproveThisDocLink,
  StepNameDirective,
  TutorialNavigation,
  MarkdownFileViewComponent,
  ApiVersionsList,
  ApiListItems,
  CodeDiffLink,
  HistoryLink,
  StepDownloadZipLink
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
  exports: exportsAndDeclarations,
  declarations: exportsAndDeclarations,
  providers: [
    PageTitleService,
    PatchLoadResolve,
    TutorialRegistryCache,
    StepsTemplatesLoader,
    ActivatedTutorial,
    StepsUtils,
    ApiLoadResolve,
    ActivatedApi
  ]
})
export class TutorialsCoreModule {
}
