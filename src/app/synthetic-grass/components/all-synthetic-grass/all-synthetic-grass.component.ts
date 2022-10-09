import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SyntheticGrass } from '../../model/synthetic-grass.model';
import { SyntheticGrassService } from '../../services/synthetic-grass.service';

@Component({
  selector: 'app-all-synthetic-grass',
  templateUrl: './all-synthetic-grass.component.html',
  styleUrls: ['./all-synthetic-grass.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllSyntheticGrassComponent implements OnInit, OnDestroy {
  syntheticGrasses;
  @Input() syntheticGrassSelected;
  @Input() currentLst;
  @Input() removeSelectedItem;
  isSelectedItem: boolean = false;

  loadAllSyntheticGrassTypeByTypeSubscription: Subscription;  
  
  loadSyntheticGrassTypeByTypeSubscription: Subscription;

  constructor(private syntheticGrassService: SyntheticGrassService) { 
  
    }

  ngOnInit(): void {
    var item = this.syntheticGrasses?.find(x => x == "all synthetic grass");
    this.selectTypeOfSyntheticGrass(item); 
  }

  getAllSyntheticGrassType() {
   this.loadAllSyntheticGrassTypeByTypeSubscription =  this.syntheticGrassService.onAllSyntheticGrassType().subscribe(res => {
      this.syntheticGrasses = res;
    });
  }

  syntheticGrassDetails(syntheticGrass: SyntheticGrass) {
    this.isSelectedItem = true;
    this.syntheticGrassSelected = syntheticGrass;
  }

  selectTypeOfSyntheticGrass(typeOfSyntheticGrass) {
    this.isSelectedItem = false;  
    this.syntheticGrassSelected = null; 
   this.loadSyntheticGrassTypeByTypeSubscription =  this.syntheticGrassService.loadSyntheticGrassByType(typeOfSyntheticGrass).subscribe(res => {
      this.currentLst = res;
    });
  }

  ngOnDestroy(): void {
    if(this.loadAllSyntheticGrassTypeByTypeSubscription) {
      this.loadAllSyntheticGrassTypeByTypeSubscription.unsubscribe();
    }

      if(this.loadSyntheticGrassTypeByTypeSubscription) {
        this.loadSyntheticGrassTypeByTypeSubscription.unsubscribe();
      }
  }

  onRemoveSelectedItem(removeSelectedItem) {
    this.isSelectedItem = false;  
    this.syntheticGrassSelected = null; 
  }

}
