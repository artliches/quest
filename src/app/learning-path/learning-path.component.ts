import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-learning-path',
  templateUrl: './learning-path.component.html',
  styleUrls: ['./learning-path.component.scss']
})
export class LearningPathComponent implements OnInit {
  abilities = {};
  abilityNumbers = [];
  learningPathName = '';
  @Input() pathNumber = 0;
  @Output() learningPathCardToDelete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 5; i++) {
      this.abilityNumbers.push(i);
      this.abilities[i] = '';
    }
  }

  growTextarea(event: any) {
    event.target.style.height = '0px';
    event.target.style.height = (event.target.scrollHeight + 5) + 'px';
  }

  removeLearningPath() {
    this.learningPathCardToDelete.emit(this.pathNumber);
  }
}
