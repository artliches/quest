import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  inventory = {};
  inventoryNumbers = [];

  ngOnInit() {
    for (let i = 1; i <= 12; i++) {
      this.inventoryNumbers.push(i);
      this.inventory[i] = '';
    }
  }

  growTextarea(event: any) {
    event.target.style.height = '0px';
    event.target.style.height = (event.target.scrollHeight + 5) + 'px';
  }
}
