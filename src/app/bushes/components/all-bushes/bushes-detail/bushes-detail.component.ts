import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bush } from 'src/app/bushes/model/bushes.model';

@Component({
  selector: 'app-bushes-detail',
  templateUrl: './bushes-detail.component.html',
  styleUrls: ['./bushes-detail.component.css']
})
export class BushesDetailComponent implements OnInit {
  @Input() bush;
  @Input() bushSelected;
  @Input() selectedBushItem =[];
  @Output() removeSelectedItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bushDetails(bush: Bush) {
    this.selectedBushItem.push(bush);
    // this.ref.markForCheck();
  }
  
 onBushFullList() {
  this.removeSelectedItem.emit();
 }

}
