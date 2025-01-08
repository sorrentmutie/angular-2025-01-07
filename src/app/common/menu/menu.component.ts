import { Component } from '@angular/core';
import { SpecialService } from '../special.service';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {



   myObservable = of(1,2,3,4,5,6,7,8,9,10)
     .pipe(
       map( x => x * 3),
       filter( x => x % 2 === 0)
     );


   myObserver = {
    next: (x:number) => console.log('Observer got a next value: ' + x),
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification')
  }

   constructor(public specialService: SpecialService) {
    //myObservable.subscribe(myObserver);
    console.log('MenuComponent created');
   }

   clickButton(){
      this.myObservable.subscribe(this.myObserver);
   }


}
