import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bush } from 'src/app/bushes/model/bushes.model';

@Component({
  selector: 'app-bushes-list',
  templateUrl: './bushes-list.component.html',
  styleUrls: ['./bushes-list.component.css']
})
export class BushesListComponent implements OnInit {
  @Input() bushes;
  @Output() bushSelected = new EventEmitter<Bush>();
  isSelectedItem: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseBushIcon() {
    this.isSelectedItem = false;
  }

  onBushItemSelected(bush: Bush) {
    this.isSelectedItem = true;
    this.bushSelected.emit(bush);
  }

}
