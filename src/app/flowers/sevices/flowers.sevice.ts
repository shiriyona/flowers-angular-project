import { Injectable } from "@angular/core";
import { Observable, of, Subscription, subscribeOn } from "rxjs";
import { Flower } from "../model/flowers.model";

export class FlowersService {

   flowersType: string[]= [
        'all flowers',
        'rose',
        'tropical' 
      ];
      allFlowers

    private roses: Flower[] = [
      new Flower(
        'rose1',
        'this is rose1 description',
        'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg',
    ),
      new Flower('rose2',
        'this is rose2 description',
        'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg',
      )
    ];

    private tropicals: Flower[] = [
      new Flower(
        'Tropical1',
        'this is Tropical1 description',
        'https://i.vimeocdn.com/video/1008844994-6476435f2dcb0ec69f4dd8fa355fb3eb11d86420d0b985ebf6b26e7916172ba7-d_640x360.jpg',
    ),
      new Flower('Tropical2',
        'this is Tropical2 description',
        'https://i.vimeocdn.com/video/1405420561-7c90de9556c154b6a5ae18f3c7781fc7cb4e64a3688dedefe329c764f33f6962-d_640x360.jpg',
      )
    ];

    onAllFlowersType():Observable<any> {
        return of(this.flowersType.slice());
    }

    allItem() {
      this.allFlowers = this.allFlowers.push(Flower, this.roses, this.tropicals);
    }

    loadFlowerByType(flowerType):Observable<any>  { 
        switch(flowerType) {
            case 'all flowers': 
            return of([...this.roses, ...this.tropicals]);
            console.log()
            case 'all flowers': return of(this.allFlowers.slice())
            case 'rose': return of(this.roses.slice()); 
            case 'tropical': return of(this.tropicals.slice());
        }
        return of([...this.roses, ...this.tropicals]);
            console.log()
    }
}