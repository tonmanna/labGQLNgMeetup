import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardViewModule } from 'lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
