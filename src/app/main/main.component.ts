import { Component, OnInit } from '@angular/core';
import wordListJson from '../../assets/worldlist.json';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  typeOfTitle = '';
  titleTypes = ['Operation', 'Code Name', 'Code Word', 'Secret Project'];
  adjective = '';
  noun = '';
  constructor() {
    this.generateRandomName();
  }
  generateRandomIndex(max: number) {
    return Math.floor(Math.random() * max);
  }
  generateRandomName() {
    let randomIndex = this.generateRandomIndex(this.titleTypes.length);
    this.typeOfTitle = this.titleTypes[randomIndex];
    this.noun = wordListJson.N[this.generateRandomIndex(wordListJson.N.length)];
    this.adjective =
      wordListJson.A[this.generateRandomIndex(wordListJson.A.length)];
  }
  ngOnInit(): void {}
}
