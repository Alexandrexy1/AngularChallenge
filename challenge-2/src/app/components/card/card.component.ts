import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-card',
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  planType = "Simples";
  planPrice = 200;

  @Input("buttonText") buttonText = "";
  @Input({ required: true, alias: "buttonStyle" }) buttonStyle: "white" | "purple" = "white";

  @Input({ required: true, alias: "cardStyle" }) cardStyle: "orange" | "gray" = "gray";
}
