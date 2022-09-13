import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tree } from 'src/app/trees/model/trees.model';

@Component({
  selector: 'app-trees-list',
  templateUrl: './trees-list.component.html',
  styleUrls: ['./trees-list.component.css']
})
export class TreesListComponent implements OnInit {
  @Input() trees;
  @Output() treeSelected = new EventEmitter<Tree>();
  isSelectedItem: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseTreeIcon() {
    this.isSelectedItem = false;
  }

  onTreeItemSelected(tree: Tree) {
    this.isSelectedItem = true;
    this.treeSelected.emit(tree);
  }

}
