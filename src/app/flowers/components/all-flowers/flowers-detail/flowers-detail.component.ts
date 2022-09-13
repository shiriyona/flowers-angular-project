import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Flower } from '../../../model/flowers.model';

@Component({
  selector: 'app-flowers-detail',
  templateUrl: './flowers-detail.component.html',
  styleUrls: ['./flowers-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlowersDetailComponent implements OnInit {
  @Input() flower;
  @Input() flowerSelected;
  @Input() selectedFlowerItem =[];
  @Output() removeSelectedItem = new EventEmitter();

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  flowerDetails(flower: Flower) {
    this.selectedFlowerItem.push(flower);
    // this.ref.markForCheck();
  }
  
 onFlowerFullList() {
  this.removeSelectedItem.emit();
 }
}
