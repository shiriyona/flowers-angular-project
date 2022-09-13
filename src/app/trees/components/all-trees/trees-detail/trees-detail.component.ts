import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tree } from 'src/app/trees/model/trees.model';

@Component({
  selector: 'app-trees-detail',
  templateUrl: './trees-detail.component.html',
  styleUrls: ['./trees-detail.component.css']
})
export class TreesDetailComponent implements OnInit {
  @Input() tree;
  @Input() treeSelected;
  @Input() selectedTreeItem =[];
  @Output() removeSelectedItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  treeDetails(tree: Tree) {
    this.selectedTreeItem.push(tree);
  }
  
 onTreeFullList() {
  this.removeSelectedItem.emit();
 }
}
