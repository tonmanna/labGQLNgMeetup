import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './lib/card-view/card-view.component';
import { ListItemComponent } from './lib/list-item/list-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
const COMPONENT = [CardViewComponent, ListItemComponent];

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule],
  exports: COMPONENT,
  declarations: COMPONENT
})
export class LibModule { }
