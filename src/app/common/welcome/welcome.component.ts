import { Component } from '@angular/core';
import { CustomersService } from '../../customers/customers.service';
import { Customer } from '../../customers/customer';

@Component({
  selector: 'app-welcome',
  standalone: false,

  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

   customers: Customer[] = [];
   constructor(private customersService: CustomersService){
      customersService.customers$.subscribe(
        (customer: Customer) => {this.customers.push(customer)} )
   }

   start(){
     this.customersService.start();
     setInterval( () => {
      console.log('Stopping');
      this.customersService.stop()
     }, 11000);
   }
}
