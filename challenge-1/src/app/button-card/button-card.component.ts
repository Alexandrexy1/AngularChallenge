import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-card',
  standalone: false,

  templateUrl: './button-card.component.html',
  styleUrl: './button-card.component.scss'
})
export class ButtonCardComponent {
  @Output("buttonClickEmitter") buttonClickEmitter = new EventEmitter<boolean>();
  onButtonClick() {
    this.buttonClickEmitter.emit(true);
  }
}
