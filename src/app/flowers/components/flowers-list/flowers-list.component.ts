import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flower } from '../../model/flowers.model';

@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.css']
})
export class FlowersListComponent implements OnInit {
  @Input() flowers;
  @Output() flowerSelected = new EventEmitter<Flower>();
  isSelectedItem: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseFlowerIcon() {
    this.isSelectedItem = false;
  }

  onFlowerItemSelected(flower: Flower) {
    this.isSelectedItem = true;
    this.flowerSelected.emit(flower);
  }
  
}
