import {DiffBoxComponent} from './diffbox.component';
import {ApiListItems} from './api-list-items.component';
import {ApiVersionsList} from './api-versions-list.component';
import {MarkdownFileViewComponent} from './markdown-file.component';
import {TutorialNavigation} from './tutorial-navigation.component';
import {StepNameDirective} from './tutorial-name.directive';
import {ImproveThisDocLink} from './improve-this-doc.directive';
import {CommonModule} from '@angular/common';
import {ApiExampleCodeHighlightDirective} from './api-example-code-highligh.directive';
import {ApiPageComponent} from './api-page.component';
import {TutorialPage} from './tutorial-page.component';
import {TutorialRegistryCache} from './tutorials-registry-cache';
import {PatchLoadResolve} from './patch-load-resolver';
import {StepsTemplatesLoader} from './steps-templates-loader';
import {ActivatedTutorial} from './current-tutorial';
import {StepsUtils} from './step-utils';
import {ApiLoadResolve} from './api-load-resolve';
import {ActivatedApi} from './current-api';
import {NgModule} from '@angular/core';
import {StepListComponent} from './steps-list.component.ts';
import {RouterModule} from '@angular/router';


const exportsAndDeclarations = [
  StepListComponent,
  TutorialPage,
  ApiPageComponent,
  ApiExampleCodeHighlightDirective,
  ImproveThisDocLink,
  StepNameDirective,
  TutorialNavigation,
  MarkdownFileViewComponent,
  ApiVersionsList,
  ApiListItems
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: exportsAndDeclarations,
  declarations: exportsAndDeclarations,
  providers: [
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
