import { Observable, of, Subscription, subscribeOn } from "rxjs";
import { Bush } from "../model/bushes.model";


export class BushesService {
    bushesTypes: string[] = [
        'all bushes',
        'scented',
        'unscented'
      ];
    
    private scented: Bush[] = [
        new Bush(
        'jasminum',
        'a scented exists in white rash',
        '../../../../assets/img/my-jasminum-bush.jpg' ,
        2    
    ),
    new Bush(
        'combretum indicum',
        'a scented combretum indicum bush exists in pink rash',
        '../../../../assets/img/my-combretum-indicum-bush.jpg' ,
        2    
    ),
    new Bush(
        'rose',
        'a scented rose bush exists in white rash',
        '../../../../assets/img/my-rose-bush.jpg' ,
        2    
    ),
    new Bush(
        'brunfelsia pauciflora',
        'a scented brunfelsia pauciflora bush exists in white, purple and pink rash',
        '../../../../assets/img/my-brunfelsia-pauciflora-bush.jpg' ,
        2    
    ),
    new Bush(
        'lavandula',
        'a scented lavandula bush exists in purple rash',
        '../../../../assets/img/my-lavandula-bush.jpg' ,
        2    
    ),
    ];

    private unscented: Bush[] = [
    new Bush(
        'cordyline',
        'a unscented cordyline bush exists in purple rash',
        '../../../../assets/img/my-cordyline-bush.jpg' ,
        2      
    ),
    new Bush(
        'hibiscus',
        'a unscented hibiscus bush exists in all colors',
        '../../../../assets/img/my-hibiscus-bush.jpg' ,
        2      
    ),
    new Bush(
        'rhus-',
        'a unscented rhus- bush exists with green leave',
        '../../../../assets/img/my-rhus-bush.jpg' ,
        2      
    )
    ];

    onAllBushesType():Observable<any> {
        return of(this.bushesTypes.slice());
    }

    loadBushByType(bushType):Observable<any>  { 
        switch(bushType) {
            case 'all bushes': 
            return of([...this.scented, ...this.unscented]);
            console.log()
            break;
            case 'scented': return of(this.scented.slice()); 
            break
            case 'unscented': return of(this.unscented.slice());
            break;
            default:
            return of([...this.scented, ...this.unscented]);
            console.log()
            break;
        }
    }
}