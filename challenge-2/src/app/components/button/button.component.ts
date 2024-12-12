import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true, alias: "buttonText" }) buttonText: string = '';
  @Input("buttonStyle") buttonStyle: "white" | "purple" = "white";

  @Output("clicked") buttonClicked = new EventEmitter<void>();

  onClicked(): void {
    this.buttonClicked.emit();
  }
}
