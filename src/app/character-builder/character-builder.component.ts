import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-builder',
  templateUrl: './character-builder.component.html',
  styleUrls: ['./character-builder.component.scss']
})
export class CharacterBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  growWidth(event: any) {
    event.target.style.width = '0px';
    event.target.style.width = (event.target.scrollWidth + 5) + 'px';
  }
}
