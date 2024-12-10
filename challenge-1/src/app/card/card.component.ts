import { Component, Input, numberAttribute } from '@angular/core';

function capitalizeText(text: string): string {
  return text.replace(text.charAt(0), text.charAt(0).toUpperCase());
}

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({
    alias: "planType",
    required: true,
    transform: (text: string) => capitalizeText(text)
  }) planType: string = "";

  @Input({ alias: "planPrice", required: true }) planPrice: Number = 0;

  buttonClicked(value: boolean) {
    console.log(value);
  }
}
