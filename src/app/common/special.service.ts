import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialService {

  private counter = 0;

  constructor(){
    console.log('SpecialService created');
  }

  increaseCounter(){
    this.counter++;
  }
  getCounter(): number{
    return this.counter;
  }
}
