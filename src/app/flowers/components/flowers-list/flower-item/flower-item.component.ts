import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flower } from 'src/app/flowers/model/flowers.model';

@Component({
  selector: 'app-flower-item',
  templateUrl: './flower-item.component.html',
  styleUrls: ['./flower-item.component.css']
})
export class FlowerItemComponent implements OnInit {
  @Input() flower: Flower;
  @Output() flowerSelected = new EventEmitter<Flower>();


  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.flowerSelected.emit(this.flower);
  }

}
