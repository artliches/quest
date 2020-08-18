import { Component, OnInit, Output, EventEmitter, Input, OnChanges, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit, OnChanges {
  // tslint:disable: no-string-literal
  @Input() abilitiesJson = {};
  @Output() jsonToExport = new EventEmitter<any>();

  abilitiesData = {};
  numberOfPaths = [0];
  learningPathsArray = [];

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    if (this.abilitiesJson['charAbilities']) {
      const numberOfCards = Object.keys(this.abilitiesJson['charAbilities']).length;
      this.numberOfPaths = [];
      for (let i = 0; i < numberOfCards; i ++) {
        this.numberOfPaths.push(i);
      }
      this.abilitiesData = this.abilitiesJson;
    }
  }

  addNewLearningPath() {
    this.numberOfPaths.push(this.numberOfPaths.length);
  }

  removeLearningPath(deleteTargetInfo: any) {
    const indexToRemove = this.numberOfPaths.indexOf(deleteTargetInfo['pathNum']);
    if (indexToRemove !== -1) {
      this.numberOfPaths.splice(indexToRemove, 1);
      this.learningPathsArray.forEach((obj, index) => {
        if (obj['cardNumber'] === deleteTargetInfo['cardNum']) {
          this.learningPathsArray.splice(index, 1);
        }
      });

      this.jsonToUpload(this.learningPathsArray, true);
    }
  }

  jsonToUpload(jsonToExport: any, deleteOperation?: boolean) {
    let existingEntry = false;
    if (!deleteOperation) {
      this.learningPathsArray.forEach((obj, index) => {
        if (obj['cardNumber'] === jsonToExport['cardNumber']) {
          existingEntry = true;
          this.learningPathsArray[index] = jsonToExport;
        }
      });
      if (!existingEntry) {
        this.learningPathsArray.push(jsonToExport);
      }
    }
    this.jsonToExport.emit(this.learningPathsArray);
  }

  growTextarea(event: any) {
    event.target.style.height = '0px';
    event.target.style.height = (event.target.scrollHeight + 5) + 'px';
  }
}
