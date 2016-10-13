import {DiffBoxComponent, DiffBoxCode} from "./diffbox.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [DiffBoxComponent, DiffBoxCode],
  imports: [CommonModule],
  exports: [DiffBoxComponent, DiffBoxCode]
})
export class DummyModule { }
