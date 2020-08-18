
import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-character-builder',
  templateUrl: './character-builder.component.html',
  styleUrls: ['./character-builder.component.scss']
})
export class CharacterBuilderComponent implements OnInit, OnChanges {
  // tslint:disable: no-string-literal
  @Input() uploadedJson = {};
  @Input() forceUpload = false;
  @Output() charName = new EventEmitter<any>();
  @Output() charSheetJson = new EventEmitter<any>();
  charSheet = {};

  constructor() { }

  ngOnInit() {
    this.charSheet = {
      name: '',
      pronouns: '',
      age: '',
      height: '',
      role: '',
      body: '',
      face: '',
      vibe: '',
      distinct1: '',
      distinct2: '',
      mannerism: '',
      home: '',
      community: '',
      ideal: '',
      flaw: '',
      dream: ''
    };

    this.updateJson();
  }

  ngOnChanges() {
    if (this.uploadedJson['charSheet']) {
      this.charSheet = this.uploadedJson['charSheet'];
    }
    this.updateJson();
  }

  capitalizeString(stringInput: string, charSheetKey?: string) {
    const upperString = stringInput[0].toUpperCase() + stringInput.slice(1);
    if (charSheetKey !== '') {
      this.charSheet[charSheetKey] = upperString;
    }
    return upperString;
  }

  passCharName(newCharName: string) {
    this.charSheet['charName'] = this.capitalizeString(this.charSheet['charName']);
    this.charName.emit(newCharName);
  }

  growWidth(event: any) {
    event.target.style.width = '0px';
    event.target.style.width = (event.target.scrollWidth + 5) + 'px';
  }

  updateJson() {
    this.charSheetJson.emit(this.charSheet);
  }
}
