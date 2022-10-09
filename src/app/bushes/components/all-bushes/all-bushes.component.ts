import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bush } from '../../model/bushes.model';
import { BushesService } from '../../services/bushes.service';

@Component({
  selector: 'app-all-bushes',
  templateUrl: './all-bushes.component.html',
  styleUrls: ['./all-bushes.component.css']
})
export class AllBushesComponent implements OnInit {
  numberOfTicks = 0;
  bushes;
  @Input() bushSelected;
  @Input() currentLst;
  @Input() removeSelectedItem;
  isSelectedItem: boolean = false;

  loadAllBushesTypeByTypeSubscription: Subscription;  
  
  loadBushesTypeByTypeSubscription: Subscription;

  constructor(private bushesService: BushesService) { 
    }

  ngOnInit(): void {
    var item = this.bushes?.find(x => x.value == "all bushes");
    this.selectTypeOfBush(item); 
  }

  getAllBushesType() {
   this.loadAllBushesTypeByTypeSubscription =  this.bushesService.onAllBushesType().subscribe(res => {
      this.bushes = res;
    });
  }

  bushDetails(bush: Bush) {
    this.isSelectedItem = true;
    this.bushSelected = bush;
  }

  selectTypeOfBush(typeOfBush) {
    this.isSelectedItem = false;  
    this.bushSelected = null; 
   this.loadBushesTypeByTypeSubscription =  this.bushesService.loadBushByType(typeOfBush).subscribe(res => {
      this.currentLst = res;
    });
  }

  ngOnDestroy(): void {
    if(this.loadAllBushesTypeByTypeSubscription) {
      this.loadAllBushesTypeByTypeSubscription.unsubscribe();
    }

      if(this.loadBushesTypeByTypeSubscription) {
        this.loadBushesTypeByTypeSubscription.unsubscribe();
      }
  }

  onRemoveSelectedItem(removeSelectedItem) {
    this.isSelectedItem = false;  
    this.bushSelected = null; 
  }

}
