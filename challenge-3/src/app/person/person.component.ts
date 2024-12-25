import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: false,

  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input({ required: true }) personIndex: number = 0;
  @Input({ required: true }) personName: string = "";
  @Input({ required: true }) personAge: number = 0;
  @Input({ required: true }) isOdd: boolean = false;
  @Input({ required: true }) isSelected: boolean = false;

  @Output("personSelected") onPersonSelectEmitter = new EventEmitter<number>();

  personSelected() {
    this.onPersonSelectEmitter.emit(this.personIndex);
  }
}
