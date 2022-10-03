import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SyntheticGrass } from 'src/app/synthetic-grass/model/synthetic-grass.model';

@Component({
  selector: 'app-synthetic-grass-detail',
  templateUrl: './synthetic-grass-detail.component.html',
  styleUrls: ['./synthetic-grass-detail.component.css']
})
export class SyntheticGrassDetailComponent implements OnInit {
  @Input() syntheticGrass;
  @Input() syntheticGrassSelected;
  @Input() selectedSyntheticGrassItem =[];
  @Output() removeSelectedItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  syntheticGrassDetails(syntheticGrass: SyntheticGrass) {
    this.selectedSyntheticGrassItem.push(syntheticGrass);
  }
  
 onSyntheticGrassFullList() {
  this.removeSelectedItem.emit();
 }

}
