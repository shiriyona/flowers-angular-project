import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Flower } from '../../model/flowers.model';
import { FlowersService } from '../../sevices/flowers.sevice';

@Component({
  selector: 'app-all-flowers',
  templateUrl: './all-flowers.component.html',
  styleUrls: ['./all-flowers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllFlowersComponent implements OnInit, OnDestroy {
  numberOfTicks = 0;
  flowers;
  @Input() flowerSelected;
  @Input() currentLst;
  @Input() removeSelectedItem;
  isSelectedItem: boolean = false;

  loadAllFlowersTypeByTypeSubscription: Subscription;  
  
  loadFlowerTypeByTypeSubscription: Subscription;

  constructor(private flowersService: FlowersService,
    private ref: ChangeDetectorRef) { 
      // setInterval(() => {
      //   this.numberOfTicks++;
      //   // require view to be updated
      //   // this.ref.markForCheck();
      // }, 1000);
    }

  ngOnInit(): void {
    var item = this.flowers?.find(x => x == "all flowers");
    this.selectTypeOfFlower(item); 
    // this.ref.markForCheck;
  }

  getAllFlowersType() {
   this.loadAllFlowersTypeByTypeSubscription =  this.flowersService.onAllFlowersType().subscribe(res => {
      this.flowers = res;
    });
  }

  flowerDetails(flower: Flower) {
    this.isSelectedItem = true;
    this.flowerSelected = flower;
  }

  selectTypeOfFlower(typeOfFlower) {
    this.isSelectedItem = false;  
    this.flowerSelected = null; 
   this.loadFlowerTypeByTypeSubscription =  this.flowersService.loadFlowerByType(typeOfFlower).subscribe(res => {
      this.currentLst = res;
    });
  }

  ngOnDestroy(): void {
    if(this.loadAllFlowersTypeByTypeSubscription) {
      this.loadAllFlowersTypeByTypeSubscription.unsubscribe();
    }

      if(this.loadFlowerTypeByTypeSubscription) {
        this.loadFlowerTypeByTypeSubscription.unsubscribe();
      }
  }

  onRemoveSelectedItem(removeSelectedItem) {
    this.isSelectedItem = false;  
    this.flowerSelected = null; 
  }

  // @Input() prop: number = 0;

  // ngOnChanges(changes: SimpleChanges) {
  //   changes.prop;
  // }
}
