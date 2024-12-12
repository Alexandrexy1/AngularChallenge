import { Component } from '@angular/core';
import { CardComponent } from "./components/card/card.component";
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  buttonStyle = "";
  buttonText = "";
}
