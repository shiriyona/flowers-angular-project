import { Injectable } from "@angular/core";
import { Observable, of, Subscription, subscribeOn } from "rxjs";
import { SyntheticGrass } from "../model/synthetic-grass.model";

export class SyntheticGrassService {

   syntheticGrassesType: string[]= [
        'כל הדשאים הסינטטים',
        'snapdragon',
        'tropical' 
      ];
      allSyntheticGrasses

    private roses: SyntheticGrass[] = [
      new SyntheticGrass(
        'rose1',
        'this is rose1 description',
        'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg',
        50
    ),
      new SyntheticGrass('rose2',
        'this is rose2 description',
        'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg',
        58
      )
    ];

    private tropicals: SyntheticGrass[] = [
      new SyntheticGrass(
        'Tropical1',
        'this is Tropical1 description',
        'https://i.vimeocdn.com/video/1008844994-6476435f2dcb0ec69f4dd8fa355fb3eb11d86420d0b985ebf6b26e7916172ba7-d_640x360.jpg',
        68
    ),
      new SyntheticGrass('Tropical2',
        'this is Tropical2 description',
        'https://i.vimeocdn.com/video/1405420561-7c90de9556c154b6a5ae18f3c7781fc7cb4e64a3688dedefe329c764f33f6962-d_640x360.jpg',
        90
      )
    ];

    onAllSyntheticGrassesType():Observable<any> {
        return of(this.syntheticGrassesType.slice());
    }

    allItem() {
      this.allSyntheticGrasses = this.allSyntheticGrasses.push(SyntheticGrass, this.roses, this.tropicals);
    }

    loadSyntheticGrassByType(syntheticGrassType):Observable<any>  { 
        switch(syntheticGrassType) {
            case 'כל הדשאים הסינטטים': 
            return of([...this.roses, ...this.tropicals]);
            console.log()
            case 'all flowers': return of(this.allSyntheticGrasses.slice())
            case 'rose': return of(this.roses.slice()); 
            case 'tropical': return of(this.tropicals.slice());
        }
        return of([...this.roses, ...this.tropicals]);
            console.log()
    }
}