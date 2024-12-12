import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output("buttonText") buttonText = new EventEmitter<string>();
  @Output("buttonStyle") buttonStyle = new EventEmitter<"white" | "purple">();

  handleButtonText(value: KeyboardEvent) {
    const text = value.target as HTMLInputElement;
    this.buttonText.emit(text.value);
  }

  handleButtonStyle(value: KeyboardEvent) {
    const style = value.target as HTMLInputElement;
    this.buttonStyle.emit(style.value as "white" | "purple");
  }
}
