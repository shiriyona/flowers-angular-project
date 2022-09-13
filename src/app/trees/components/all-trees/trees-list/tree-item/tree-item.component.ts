import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tree } from 'src/app/trees/model/trees.model';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css']
})
export class TreeItemComponent implements OnInit {
  @Input() tree: Tree;
  @Output() treeSelected = new EventEmitter<Tree>();


  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.treeSelected.emit(this.tree);
  }

}
