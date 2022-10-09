import { Observable, of, Subscription, subscribeOn } from "rxjs";
import { Bush } from "../model/bushes.model";

interface BushTypes {
    value: string;
    viewValue: string;
  }

export class BushesService {
    bushesTypes: BushTypes[] = [
        {value: 'all bushes', viewValue: 'all bushes'},
        {value: 'scented', viewValue: 'scented'},
        {value: 'unscented', viewValue: 'unscented'},
      ];

      allBushes;
    
    private scented: Bush[] = [
        new Bush(
        'scented',
        'this is necklace1 description',
        'https://cdn.pixabay.com/photo/2017/08/02/01/34/pocket-watch-2569573__340.jpg' ,
        2    
    ),
        new Bush('scented',
        'this is necklace2 description',
        'https://cdn.pixabay.com/photo/2016/03/03/17/25/beads-1234666__340.jpg',
        5 
    ),
    new Bush('scented',
    'this is necklace3 description',
    'https://cdn.pixabay.com/photo/2017/08/06/05/19/invitation-2589041__340.jpg', 
    7
)
    ];

    private unscented: Bush[] = [
        new Bush('bracelet1',
        'this is bracelet1 description',
        'https://cdn.pixabay.com/photo/2014/03/06/21/57/coffer-281253__340.jpg',
        5     
    ),
        new Bush('bracelet2',
        'this is necklace2 description',
        'https://cdn.pixabay.com/photo/2018/05/10/20/03/love-3388626__340.jpg',
        6   
    ),
        new Bush('bracelet3',
        'this is necklace3 description',
        'https://cdn.pixabay.com/photo/2016/02/13/22/48/bracelet-1198737_960_720.jpg',
        6   
        )
    ];

    allItem() {
       this.allBushes = this.allBushes.push(Bush, this.unscented, this.scented);
    }

    onAllBushesType():Observable<any> {
        return of(this.bushesTypes.slice());
    }

    loadBushByType(bushType):Observable<any>  { 
        switch(bushType) {
            case 'all bushes': 
            return of([...this.scented, ...this.unscented]);
            console.log()
            // case 'all bushes': return of(this.allBushes.slice())
            case 'scented': return of(this.scented.slice()); 
            case 'unscented': return of(this.unscented.slice());
        }
    }
}