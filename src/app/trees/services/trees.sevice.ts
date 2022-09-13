import { Injectable } from "@angular/core";
import { Observable, of, Subscription, subscribeOn } from "rxjs";
import { Tree } from "../model/trees.model";

export class TreesService {

   treesType: string[]= [
        'all trees',
        'palm',
        'oak' 
      ];
      allTrees;

    private palms: Tree[] = [
      new Tree(
        'Palm1',
        'this is Palm1 description',
        '',
    ),
      new Tree(
        'Palm2',
        'this is Palm2 description',
        '',
      )
    ];

    private oak: Tree[] = [
      new Tree(
        'oak1',
        'this is oak1 description',
        '',
    ),
      new Tree(
        'oak2',
        'this is oak2 description',
        '',
      )
    ];

    onAllTreesType():Observable<any> {
        return of(this.treesType.slice());
    }

    allItem() {
      this.allTrees = this.allTrees.push(Tree, this.palms, this.oak);
    }

    loadTreeByType(treesType):Observable<any>  { 
        switch(treesType) {
            case 'all trees': 
            return of([...this.palms, ...this.oak]);
            console.log()
            case 'all trees': return of(this.allTrees.slice())
            case 'palm': return of(this.palms.slice()); 
            case 'tropical': return of(this.oak.slice());
        }
    }
}