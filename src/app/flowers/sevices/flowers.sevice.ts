import { Injectable } from "@angular/core";
import { Observable, of, Subscription, subscribeOn } from "rxjs";
import { Flower } from "../model/flowers.model";

export class FlowersService {

   flowersType: string[]= [
        'all flowers',
        'summer',
        'winter',
        'multi seasonal' 
      ];

      allFlowers;

    private summer: Flower[] = [
      new Flower(
        'vinca',
        'a summer flower exists in all colors',
        '../../../../assets/img/my-vinca-flower.jpg',
        50
    ),
      new Flower(
        'tagetes',
        'a summer flower exists in orange and yellow',
        '../../../../assets/img/my-tagetes-flower.jpg',
        58
      ),
      new Flower(
      'petunia',
      'a summer flower exists in purple red white and lilac',
      '../../../../assets/img/my-petunia-flower.jpg',
      58
    ),
    new Flower(
    'portulca',
    'a summer flower exists in red pink and yellow',
    '../../../../assets/img/my-portulca-flower.jpg',
    58
    ),
    new Flower(
    'celosia',
    'a summer flower exists in red, pink, purple, orange and yellow',
    '../../../../assets/img/my-celosia-flower.jpg',
    58
    ),
    new Flower(
    'cynicism ',
    'a summer flower exists in pink, orange and yellow',
    '../../../../assets/img/my-cynicism-flower.jpg',
    58
    )   
  ];

  private winter: Flower[] = [
    new Flower(
      'viola tricolor',
      'a winter flower exists in purple, white, red and yellow',
      '../../../../assets/img/my-viola-tricolor-flower.jpg',
      68
    ),
    new Flower(
      'antirrhinum',
      'a winter flower exists in purple, pink, orange, white, red and yellow',
      '../../../../assets/img/my-antirrhinum-flower.jpg',
      90
    ),
    new Flower(
    'lobularia maritimam',
    'a winter flower exists in purple and white',
    '../../../../assets/img/my-lobularia-maritimam-flower.jpg',
    90
    ),
  new Flower(
  'cyclamen',
  'a winter flower exists in purple, pink, orange, white and red',
  '../../../../assets/img/my-cyclamen-flower.jpg',
  90
  ),
new Flower(
'tropaeolum majus',
'a winter flower exists in purple, pink, orange, white, red and yellow',
'../../../../assets/img/my-tropaeolum-majus-flower.jpg',
90
)
];

private multiSeasonal: Flower[] = [
  new Flower(
    'geranium',
    'a multi-seasonal flower exists in purple, pink, orange, white, red and yellow',
    '../../../../assets/img/my-geranium-flower.jpg',
    50
),
  new Flower(
    'impatiens',
    'a multi-seasonal flower exists in purple, pink, orange, white, red and yellow',
    '../../../../assets/img/my-impatiens-flower.jpg',
    58
  ),
  new Flower(
  'pentas',
  'a multi-seasonal flower exists in purple, pink, orange, white, red and yellow',
  '../../../../assets/img/my-pentas-flower.jpg',
  58
),
new Flower(
'kalanchoe',
'a multi-seasonal flower exists in purple, pink, orange, white, red and yellow',
'../../../../assets/img/my-kalanchoe-flower.jpg',
58
),
new Flower(
'dianthus chinensis',
'a multi-seasonal flower exists in purple, pink, orange, white, red and yellow',
'../../../../assets/img/my-dianthus-chinensis-flower.jpg',
58
)   
];


    onAllFlowersType():Observable<any> {
        return of(this.flowersType.slice());
    }

    allItem() {
      this.allFlowers = this.allFlowers.push(Flower, this.winter, this.summer);
    }

    loadFlowerByType(flowerType):Observable<any>  { 
        switch(flowerType) {
            case 'all flowers': 
            return of([...this.winter, ...this.summer, ...this.multiSeasonal]);
            console.log()
            break;
            case 'winter': return of(this.winter.slice());
            break;
            case 'summer': return of(this.summer.slice());
            break;
            case 'multi seasonal': return of(this.multiSeasonal.slice());
            break; 
            default:
              return of([...this.winter, ...this.summer, ...this.multiSeasonal]);
              console.log()
            break;
         }
    }
}