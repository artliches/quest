import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-learning-path',
  templateUrl: './learning-path.component.html',
  styleUrls: ['./learning-path.component.scss']
})
export class LearningPathComponent implements OnInit, OnChanges {
  // tslint:disable: no-string-literal
  abilities = {};
  abilityNumbers = [];
  learningPathName = '';
  @Input() pathNumber = 0;
  @Input() data = {
    cardNumber: this.pathNumber,
    pathName: '',
    abilityArray: [
      {
        abilityName: '',
        abilityDescrip: ''
      }
    ]
  };
  @Output() learningPathCardToDelete = new EventEmitter<any>();
  @Output() jsonToExport = new EventEmitter<any>();

  learningPathObj = {
    cardNumber: this.pathNumber,
    pathName: '',
    abilityArray: [
      {
        abilityName: '',
        abilityDescrip: ''
      }
    ]
  };

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.abilityNumbers = [];
    this.learningPathObj = {
      cardNumber: this.pathNumber,
      pathName: '',
      abilityArray: [
      ]
    };

    for (let i = 0; i <= 4; i++) {
      this.abilityNumbers.push(i);
      this.learningPathObj.abilityArray.push({
        abilityName: '',
        abilityDescrip: '',
      });
    }

    if (this.data && this.data['abilityArray']) {
      this.learningPathObj = this.data;
      this.updateJson();
    }
    // this.updateJson();
  }

  growTextarea(event: any) {
    event.target.style.height = '0px';
    event.target.style.height = (event.target.scrollHeight + 5) + 'px';
  }

  removeLearningPath() {
    this.learningPathCardToDelete.emit(this.pathNumber);
  }

  updateJson() {
    this.jsonToExport.emit(this.learningPathObj);
  }
}
