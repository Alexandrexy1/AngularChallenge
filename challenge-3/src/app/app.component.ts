import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isRed: boolean = true;
  text: string = "I am h1!!";
  
  person = {
    name: "Alex",
    age: 21,
  }

  person2 = {
    name: "Alex",
    age: 31,
  }

  person3 = {
    name: "Alex",
    age: 41,
  }

  changeH1Class() {
    this.isRed = !this.isRed;
  }
}
