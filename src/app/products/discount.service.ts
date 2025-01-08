import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  getDiscount(productId: number): number {
     if(productId % 2 ==0){
        return 0.1;
     } else {
      return 0.05 ;
     }
  }
}
