import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnChanges {
  // tslint:disable: no-string-literal
  @Input() inventoryJson = {};
  @Input() forceUpload = false;
  @Output() jsonToExport = new EventEmitter<any>();

  constructor() { }

  inventoryNumbers = [];
  charInventory = {};

  ngOnInit() {
    this.charInventory = {
      hp: '',
      ap: '',
      inventory: []
    };

    for (let i = 1; i <= 12; i++) {
      this.inventoryNumbers.push(i);
      this.charInventory['inventory'][i] = '';
    }

    this.updateJson();
  }

  ngOnChanges() {
    if (this.inventoryJson['charInventory']) {
      this.charInventory = this.inventoryJson['charInventory'];
    }
    this.updateJson();
  }

  growTextarea(event: any) {
    event.target.style.height = '0px';
    event.target.style.height = (event.target.scrollHeight + 5) + 'px';
  }

  updateJson() {
    this.jsonToExport.emit(this.charInventory);
  }
}
