import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SyntheticGrass } from 'src/app/synthetic-grass/model/synthetic-grass.model';

@Component({
  selector: 'app-synthetic-grass-list',
  templateUrl: './synthetic-grass-list.component.html',
  styleUrls: ['./synthetic-grass-list.component.css']
})
export class SyntheticGrassListComponent implements OnInit {
  @Input() syntheticGrasses;
  @Output() syntheticGrassSelected = new EventEmitter<SyntheticGrass>();
  isSelectedItem: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseSyntheticGrassIcon() {
    this.isSelectedItem = false;
  }

  onSyntheticGrassItemSelected(syntheticGrass: SyntheticGrass) {
    this.isSelectedItem = true;
    this.syntheticGrassSelected.emit(syntheticGrass);
  }

}
