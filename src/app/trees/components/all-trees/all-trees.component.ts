import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tree } from '../../model/trees.model';
import { TreesService } from '../../services/trees.sevice';

@Component({
  selector: 'app-all-trees',
  templateUrl: './all-trees.component.html',
  styleUrls: ['./all-trees.component.css']
})
export class AllTreesComponent implements OnInit {
  trees;
  @Input() treeSelected;
  @Input() currentLst;
  @Input() removeSelectedItem;
  isSelectedItem: boolean = false;

  loadAllTreesTypeByTypeSubscription: Subscription;  
  
  loadTreeTypeByTypeSubscription: Subscription;

  constructor(private treesService: TreesService) { }

  ngOnInit(): void {
    var item = this.trees?.find(x => x == "all trees");
    this.selectTypeOfTree(item); 
  }

  getAllTreesType() {
   this.loadAllTreesTypeByTypeSubscription =  this.treesService.onAllTreesType().subscribe(res => {
      this.trees = res;
    });
  }

  treeDetails(tree: Tree) {
    this.isSelectedItem = true;
    this.treeSelected = tree
  }

  selectTypeOfTree(typeOfTree) {
    this.isSelectedItem = false;  
    this.treeSelected = null; 
   this.loadTreeTypeByTypeSubscription =  this.treesService.loadTreeByType(typeOfTree).subscribe(res => {
      this.currentLst = res;
    });
  }

  ngOnDestroy(): void {
    if(this.loadAllTreesTypeByTypeSubscription) {
      this.loadAllTreesTypeByTypeSubscription.unsubscribe();
    }
      if(this.loadTreeTypeByTypeSubscription) {
        this.loadTreeTypeByTypeSubscription.unsubscribe();
      }
  }

  onRemoveSelectedItem(removeSelectedItem) {
    this.isSelectedItem = false;  
    this.treeSelected = null; 
  }
}

