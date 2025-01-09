import { Injectable } from '@angular/core';
import { AsyncSubject, Subject } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private subject$ = new Subject<Customer>();
  private asub$ = new AsyncSubject<Customer>();

  customers$ = this.asub$.asObservable();

  constructor() { }

  start(){
      setInterval( () => {
        const nuovoCustomer = {name: Math.random().toString(),
          city: Math.random().toString()};
        this.subject$.next(nuovoCustomer);
        this.asub$.next(nuovoCustomer);

      }  ,5000)
    }

    stop(){
      this.asub$.complete();
    }
}
