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
    '../../../../assets/img/my-olive-tree.jpg',
    10
),
  new Tree(
    'pomegranate tree',
    'a fruit pomegranate tree it is a dropping out tree',
    '../../../../assets/img/my-pomegranate-tree.jpg',
    4
  ),
  new Tree(
    'carob tree',
    'a fruit carob tree it is an evergreen tree',
    '../../../../assets/img/my-carob-tree.jpg',
    4
  ),
  new Tree(
    'ficus carica tree',
    'a fruit ficus carica tree it is a dropping out tree',
    '../../../../assets/img/my-ficus-carica-tree.jpg',
    4
  ),
  new Tree(
    'phoenix dactylifera tree',
    'a fruit phoenix dactylifera tree it is an evergreen tree',
    '../../../../assets/img/my-phoenix-dactylifera-tree.jpg',
    4
  ),
  new Tree(
    'orange tree',
    'a fruit orange tree it is an evergreen tree',
    '../../../../assets/img/my-orange-tree.jpg',
    4
  ),
  new Tree(
    'clementine tree',
    'a fruit clementine tree it is an evergreen tree',
    '../../../../assets/img/my-clementine-tree.jpg',
    4
  ),
  new Tree(
    'pear tree',
    'a fruit pear tree it is an evergreen tree',
    '../../../../assets/img/my-pear-tree.jpg',
    4
  ),
  new Tree(
    'apple tree',
    'a fruit apple tree it is an evergreen tree',
    '../../../../assets/img/my-apple-tree.jpg',
    4
  ),
  new Tree(
    'pomegranate tree',
    'a fruit pomegranate tree it is an dropping out tree',
    '../../../../assets/img/my-pomegranate-tree.jpg',
    4
  )
];

private idleTrees: Tree[] = [
  new Tree(
    'oak tree',
    'an idle oak tree it is an evergreen tree',
    '../../../../assets/img/my-oak-tree.jpg',
    4
  ),
  new Tree(
    'ficus microcarpa tree',
    'an idle ficus microcarpa tree it is an evergreen tree',
    '../../../../assets/img/my-ficus-microcarpa-tree.jpg',
    4
  ),
  new Tree(
    'tipuana tipu tree',
    'an idle tipuana tipu tree it is an evergreen tree',
    '../../../../assets/img/my-tipuana-tipu-tree.jpg',
    4
  ),
  new Tree(
    'pine tree',
    'an idle pine tree it is an evergreen tree',
    '../../../../assets/img/my-pine-tree.jpg',
    4
  ),
  new Tree(
    'eucalyptus- tree',
    'an idle eucalyptus tree it is an evergreen tree',
    '../../../../assets/img/my-eucalyptus-tree.jpg',
    4
  ),
  new Tree(
    'schinus terebinthifolius tree',
    'an idle schinus terebinthifolius tree it is an evergreen tree',
    '../../../../assets/img/my-schinus-terebinthifolius-tree.jpg',
    4
  ),
];

onAllTreesType():Observable<any> {
    return of(this.treessType.slice());
}

loadTreeByType(treeType):Observable<any>  { 
    switch(treeType) {
        case 'all trees': 
        return of([...this.fruitTrees, ...this.idleTrees]);
        console.log()
        break;
        case 'fruit trees': return of(this.fruitTrees.slice());
        break; 
        case 'idle trees': return of(this.idleTrees.slice());
        break;
        default:
        return of([...this.fruitTrees, ...this.idleTrees]);
        console.log()
        break;
    }
}

}