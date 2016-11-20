// This is a workaround for Angular2-Material shitty UMD build
Object.assign(global, {
  window: {
    Map: Map,
    Set: Set
  }
});

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

@NgModule({
  bootstrap: [AppComponent],
  declarations: APP_DECLARAIONS,
  imports: [
    MdButtonModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdIconModule.forRoot(),
    FormsModule,
    routing,
    TutorialsCoreModule,
    UniversalModule
  ],
  providers: []
})
export class MainModule {
}
