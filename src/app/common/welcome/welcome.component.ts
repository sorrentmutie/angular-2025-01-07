import { Component } from '@angular/core';
import { CustomersService } from '../../customers/customers.service';
import { Customer } from '../../customers/customer';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: false,

  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

   customers: Customer[] = [];
   constructor(private customersService: CustomersService,
              private authService: AuthService,
            private router: Router) {
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

   login(){
      this.authService.login().subscribe(
        (logged) => { if(logged) this.router.navigate(['random'])}
      );
   }

}
