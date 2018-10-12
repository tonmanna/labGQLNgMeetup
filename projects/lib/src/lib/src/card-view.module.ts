import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './card-view/card-view.component';

@NgModule({
  imports: [CommonModule],
  exports: [CardViewComponent],
  declarations: [CardViewComponent]
})
export class CardViewModule { }
