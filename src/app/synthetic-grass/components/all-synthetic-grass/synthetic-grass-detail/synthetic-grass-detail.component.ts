import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { SyntheticGrass } from 'src/app/synthetic-grass/model/synthetic-grass.model';

@Component({
  selector: 'app-synthetic-grass-detail',
  templateUrl: './synthetic-grass-detail.component.html',
  styleUrls: ['./synthetic-grass-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SyntheticGrassDetailComponent implements OnInit {
  @Input() syntheticGrass;
  @Input() syntheticGrassSelected;
  @Input() selectedSyntheticGrassItem =[];
  @Output() removeSelectedItem = new EventEmitter();

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  syntheticGrassDetails(syntheticGrass: SyntheticGrass) {
    this.selectedSyntheticGrassItem.push(syntheticGrass);
    // this.ref.markForCheck();
  }
  
 onSyntheticGrassFullList() {
  this.removeSelectedItem.emit();
 }
}
