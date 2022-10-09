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

    private winter: Flower[] = [
      new Flower(
        'vinca',
        'a winter flower exists in all colors',
        '../../../../assets/img/my-vinca-flower.jpg',
        50
    ),
      new Flower(
        'tagetes',
        'a winter flower exists in orange and yellow',
        '../../../../assets/img/my-tagetes-flower.jpg',
        58
      ),
      new Flower(
      'petunia',
      'a winter flower exists in purple red white and lilac',
      '../../../../assets/img/my-petunia-flower.jpg',
      58
    ),
    new Flower(
    'portulca',
    'a winter flower exists in red pink and yellow',
    '../../../../assets/img/my-portulca-flower.jpg',
    58
    ),
    new Flower(
    'celosia',
    'a winter flower exists in red, pink, purple, orange and yellow',
    '../../../../assets/img/my-celosia-flower.jpg',
    58
    ),
    new Flower(
    'cynicism ',
    'a winter flower exists in pink, orange and yellow',
    '../../../../assets/img/my-cynicism-flower.jpg',
    58
    )   
  ];

  private summer: Flower[] = [
    new Flower(
      'viola tricolor',
      'a summer flower exists in purple, white, red and yellow',
      '../../../../assets/img/my-viola-tricolor-flower.jpg',
      68
    ),
    new Flower(
      'antirrhinum',
      'a summer flower exists in purple, pink, orange, white, red and yellow',
      '../../../../assets/img/my-viola-tricolor-flower.jpg',
      90
    ),
    new Flower(
    'lobularia maritimam',
    'a summer flower exists in purple and white',
    '../../../../assets/img/my-lobularia-maritimam-flower.jpg',
    90
    ),
  new Flower(
  'cyclamen',
  'a summer flower exists in purple, pink, orange, white and red',
  '../../../../assets/img/my-cyclamen-flower.jpg',
  90
  ),
new Flower(
'tropaeolum majus',
'a summer flower exists in purple, pink, orange, white, red and yellow',
'../../../../assets/img/my-tropaeolum-majus-flower.jpg',
90
)
];

private multiSeasonal: Flower[] = [
  new Flower(
    'Geranium',
    'פרח חורפי קיים בכל הצבעים',
    '../../../../assets/img/my-tropaeolum-majus-flower.jpg',
    50
),
  new Flower('טגטס',
    'this is rose2 description',
    '../../../../assets/img/my-tropaeolum-majus-flower.jpg',
    58
  ),
  new Flower('פטוניה',
  'this is rose2 description',
  '../../../../assets/img/my-tropaeolum-majus-flower.jpg',
  58
),
new Flower('פורטולקה',
'this is rose2 description',
'../../../../assets/img/my-tropaeolum-majus-flower.jpg',
58
),
new Flower('צולוסיה מחשיפה',
'this is rose2 description',
'../../../../assets/img/my-tropaeolum-majus-flower.jpg',
58
),
new Flower('ציניה עדינה',
'this is rose2 description',
'../../../../assets/img/my-tropaeolum-majus-flower.jpg',
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