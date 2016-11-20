import {DiffBoxComponent, DiffBoxCode} from "./diffbox.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ApiExampleCodeHighlightDirective} from "./api-example-code-highligh.directive";

@NgModule({
  declarations: [DiffBoxComponent, DiffBoxCode, ApiExampleCodeHighlightDirective],
  imports: [CommonModule],
  exports: [DiffBoxComponent, DiffBoxCode, ApiExampleCodeHighlightDirective]
})
export class DummyModule { }
