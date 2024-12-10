import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,

  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Output("inputType") inputType = new EventEmitter<string>();
  @Output("inputPrice") inputPrice = new EventEmitter<number>();

  handlePlanType(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.inputType.emit(target.value);
  }

  handlePlanPrice(event: KeyboardEvent) {
    const target = (event.target as HTMLInputElement).value;
    const parsedValue = target ? parseInt(target) : 0;
    this.inputPrice.emit(parsedValue);
  }
}
