import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bush } from 'src/app/bushes/model/bushes.model';

@Component({
  selector: 'app-bush-item',
  templateUrl: './bush-item.component.html',
  styleUrls: ['./bush-item.component.css']
})
export class BushItemComponent implements OnInit {
  @Input() bush: Bush;
  @Output() bushSelected = new EventEmitter<Bush>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.bushSelected.emit(this.bush);
  }

}
