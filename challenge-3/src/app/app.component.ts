import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'challenge-3';
  selectedPersonIndex: number | undefined;

  peopleList = [
    {
      name: "Matheus Arruda",
      age: 23
    },
    {
      name: "Maria Alice",
      age: 19
    },
    {
      name: "Alexandre Nascimento",
      age: 21
    },
    {
      name: "Jeniffer Souza",
      age: 18
    }
  ]

  selectedPerson(index: number) {
    this.selectedPersonIndex = index;
  }
}
