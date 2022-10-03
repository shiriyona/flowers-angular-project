import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SyntheticGrass } from 'src/app/synthetic-grass/model/synthetic-grass.model';

@Component({
  selector: 'app-synthetic-grass-item',
  templateUrl: './synthetic-grass-item.component.html',
  styleUrls: ['./synthetic-grass-item.component.css']
})
export class SyntheticGrassItemComponent implements OnInit {
  @Input() syntheticGrass: SyntheticGrass;
  @Output() syntheticGrassSelected = new EventEmitter<SyntheticGrass>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.syntheticGrassSelected.emit(this.syntheticGrass);
  }
}
