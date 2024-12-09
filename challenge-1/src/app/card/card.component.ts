import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ alias: "planType", required: true }) planType: string = "";
  @Input({ alias: "planPrice", required: true }) planPrice: Number = 0;
}
