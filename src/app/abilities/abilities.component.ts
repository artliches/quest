import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {

  numberOfPaths = [0];

  constructor() { }

  ngOnInit() {
  }

  addNewLearningPath() {
    this.numberOfPaths.push(this.numberOfPaths.length);
  }

  removeLearningPath(cardToRemove: number) {
    const indexToRemove = this.numberOfPaths.indexOf(cardToRemove);
    if (indexToRemove !== -1) {
      this.numberOfPaths.splice(indexToRemove, 1);
    }
  }

  growTextarea(event: any) {
    event.target.style.height = '0px';
    event.target.style.height = (event.target.scrollHeight + 5) + 'px';
  }
}
