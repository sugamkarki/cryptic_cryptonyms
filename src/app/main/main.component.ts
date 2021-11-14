import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  typeOfTitle = '';
  titleTypes = ['Operation', 'Code Name', 'Code Word', 'Secret Project'];
  constructor() {
    let randomIndex = this.generateRandomIndex(this.titleTypes.length);
    this.typeOfTitle = this.titleTypes[randomIndex];
  }
  generateRandomIndex(max: number) {
    return Math.floor(Math.random() * max);
  }
  ngOnInit(): void {}
}
