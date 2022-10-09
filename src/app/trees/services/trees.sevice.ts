import { Injectable } from "@angular/core";
import { Observable, of, Subscription, subscribeOn } from "rxjs";
import { Tree } from "../model/trees.model";

export class TreesService {

  treessType: string[]= [
    'all trees',
    'fruit trees',
    'idle trees' 
  ];
  allTrees

private fruitTrees: Tree[] = [
  new Tree(
    'olive tree',
    'a fruit olive tree it is an evergreen tree',
    'src/assets/img/my-olive-tree.jpg',
    10
),
  new Tree(
    'pomegranate tree',
    'a fruit pomegranate tree it is a dropping out tree',
    'src/assets/img/my-pomegranate-tree.jpg',
    4
  ),
  new Tree(
    'pomegranate tree',
    'a fruit carob tree it is an evergreen tree',
    'src/assets/img/my-carob-tree.jpg',
    4
  ),
  new Tree(
    'pomegranate tree',
    'a fruit pomegranate tree it is an dropping out tree',
    'src/assets/img/my-pomegranate-tree.jpg',
    4
  ),
  new Tree(
    'pomegranate tree',
    'a fruit pomegranate tree it is an dropping out tree',
    'src/assets/img/my-pomegranate-tree.jpg',
    4
  ),
  new Tree(
    'pomegranate tree',
    'a fruit pomegranate tree it is an dropping out tree',
    'src/assets/img/my-pomegranate-tree.jpg',
    4
  ),
  new Tree(
    'pomegranate tree',
    'a fruit pomegranate tree it is an dropping out tree',
    'src/assets/img/my-pomegranate-tree.jpg',
    4
  ),
  new Tree(
    'pomegranate tree',
    'a fruit pomegranate tree it is an dropping out tree',
    'src/assets/img/my-pomegranate-tree.jpg',
    4
  ),
  new Tree(
    'pomegranate tree',
    'a fruit pomegranate tree it is an dropping out tree',
    'src/assets/img/my-pomegranate-tree.jpg',
    4
  ),
  new Tree(
    'pomegranate tree',
    'a fruit pomegranate tree it is an dropping out tree',
    'src/assets/img/my-pomegranate-tree.jpg',
    4
  )
];

private idleTrees: Tree[] = [
  new Tree(
    'Tropical1',
    'this is Tropical1 description',
    'https://i.vimeocdn.com/video/1008844994-6476435f2dcb0ec69f4dd8fa355fb3eb11d86420d0b985ebf6b26e7916172ba7-d_640x360.jpg',
    47
),
  new Tree('2',
    'this is 2 description',
    'https://i.vimeocdn.com/video/1405420561-7c90de9556c154b6a5ae18f3c7781fc7cb4e64a3688dedefe329c764f33f6962-d_640x360.jpg',
    678
  )
];

onAllTreesType():Observable<any> {
    return of(this.treessType.slice());
}

allItem() {
  this.allTrees = this.allTrees.push(Tree, this.fruitTrees, this.idleTrees);
}

loadTreeByType(treeType):Observable<any>  { 
    switch(treeType) {
        case 'all trees': 
        return of([...this.fruitTrees, ...this.idleTrees]);
        console.log()
        case 'all trees': return of(this.allTrees.slice())
        case 'fruit trees': return of(this.fruitTrees.slice()); 
        case 'idle trees': return of(this.idleTrees.slice());
    }
    return of([...this.fruitTrees, ...this.idleTrees]);
        console.log()
}
}