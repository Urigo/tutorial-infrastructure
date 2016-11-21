// This is a workaround for Angular2-Material shitty UMD build
Object.assign(global, {
  window: {
    Map: Map,
    Set: Set
  }
});

import {CommonModule, APP_BASE_HREF} from "@angular/common";
import {TutorialsCoreModule} from './app/core/tutorials-module';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UniversalModule} from 'angular2-universal';
import {AppComponent} from './app/app.component';
import {routing} from './app/app-routes';
import {APP_DECLARAIONS} from './app/app-declarations';
import {MdButtonModule} from '@angular2-material/button';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdIconModule} from '@angular2-material/icon';
import {BrowserModule} from "@angular/platform-browser";

const basePath = global['basePath'] = process.env['npm_config_base_path'] || "/";

@NgModule({
  bootstrap: [AppComponent],
  declarations: APP_DECLARAIONS,
  imports: [
    BrowserModule,
    CommonModule,
    MdButtonModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdIconModule.forRoot(),
    FormsModule,
    routing,
    TutorialsCoreModule,
    UniversalModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: basePath}
  ]
})
export class MainModule {
}
