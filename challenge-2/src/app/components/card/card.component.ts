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
  @Input("buttonStyle") buttonStyle: any = "";

  buttonClicked() {
    console.log("button clicked.")
  }
}
