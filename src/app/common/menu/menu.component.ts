import { Component } from '@angular/core';
import { SpecialService } from '../special.service';
import { filter, map, of } from 'rxjs';
import { CustomersService } from '../../customers/customers.service';
import { Customer } from '../../customers/customer';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

   lastCustomer : Customer | undefined = undefined;

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

   constructor(public specialService: SpecialService,
               private customersService: CustomersService,
   ) {
    //myObservable.subscribe(myObserver);
    console.log('MenuComponent created');
    this.customersService.customers$.subscribe(
      (customer: Customer) => {this.lastCustomer = customer}
    );
   }

   clickButton(){
      this.myObservable.subscribe(this.myObserver);
   }


}
