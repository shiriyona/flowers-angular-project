import { Injectable } from "@angular/core";
import { Observable, of, Subscription, subscribeOn } from "rxjs";
import { SyntheticGrass } from "../model/synthetic-grass.model";

export class SyntheticGrassService {

   syntheticGrassesType: string[]= [
        'all synthetic grass',
        'thin',
        'medium',
        'thick' 
      ];

    private thin: SyntheticGrass[] = [
      new SyntheticGrass(
        'thin',
        'a thin synthetic grass 10 millimeter fibers per height',
        '../../../../assets/img/my-thin-synthetic-grass.jpg',
        15
    )
    ];

    private medium: SyntheticGrass[] = [
      new SyntheticGrass(
        'medium',
        'a medium synthetic grass 25 millimeter fibers per height',
        '../../../../assets/img/my-medium-synthetic-grass.jpg',
        68
    )
    ];

    private thick: SyntheticGrass[] = [
      new SyntheticGrass(
        'thick',
        'a thick synthetic grass 40 millimeter fibers per height',
        '../../../../assets/img/my-thick-synthetic-grass.jpg',
        68
    )
    ];

    onAllSyntheticGrassType():Observable<any> {
        return of(this.syntheticGrassesType.slice());
    }

    loadSyntheticGrassByType(syntheticGrassType):Observable<any>  { 
        switch(syntheticGrassType) {
            case 'all synthetic grass': 
            return of([...this.thin, ...this.medium]);
            console.log()
            break;
            case 'thin': return of(this.thin.slice()); 
            break;
            case 'medium': return of(this.medium.slice());
            break;
            case 'thick': return of(this.thick.slice());
            break;
            default:
            return of([...this.thin, ...this.medium, ...this.thick]);
            console.log()
            break;
        }
       
    }
}