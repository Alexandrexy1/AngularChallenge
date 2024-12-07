import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ButtonCardComponent } from '../button-card/button-card.component';



@NgModule({
  declarations: [CardComponent, ButtonCardComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent]
})
export class CardsModule { }
