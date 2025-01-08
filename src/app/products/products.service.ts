import { Injectable } from '@angular/core';
import { Product } from './product';
import { DiscountService } from './discount.service';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [];

  constructor(private discountService: DiscountService) { }

   getDiscountProducts(): Product[] {
     return [
      {id: 8, name: "Radio", description: "Radio AM/FM", price: 50,
        imageUrl: "https://via.placeholder.com/150"},
     ]
   }


  getProductsAsObservable(): Observable<Product[]>{
     const myObservable: Observable<Product[]> = of(this.getProducts());
     
     return myObservable;
    // return of(this.getProducts());
  }


   getProducts(): Product[] {
      return [
        { id:1, name: "Frigorifero",
           description: "Frigorifero Samsung",
            price: 500 * ( 1 - this.discountService.getDiscount(1)), imageUrl: "https://via.placeholder.com/150"},
            {
              id: 2, name: "TV Color",
               description: "TV 4k",
               price: 300 * ( 1 - this.discountService.getDiscount(2)), imageUrl: "https://via.placeholder.com/150"
            },
            {
              id: 3, name: "Microwave",
               description: "4500 W",
               price: 120 * ( 1 - this.discountService.getDiscount(3)), imageUrl: "https://via.placeholder.com/150"
            }
      ];
   }
}
