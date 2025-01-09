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
        releaseDate: new Date(2021, 1, 1),
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
           releaseDate: new Date(2022, 1, 1),
            price: 500 * ( 1 - this.discountService.getDiscount(1)), imageUrl: "https://via.placeholder.com/150"},
      {
              id: 2, name: "TV Color",
               description: "TV 4k",
               releaseDate: new Date(2024, 1, 1),
               price: 300 * ( 1 - this.discountService.getDiscount(2)), imageUrl: "https://via.placeholder.com/150"
            },
            {
              id: 3, name: "Microwave",
              releaseDate: new Date(2023, 1, 1),
               description: "4500 W",
               price: 120 * ( 1 - this.discountService.getDiscount(3)), imageUrl: "https://via.placeholder.com/150"
            }
      ];
   }

   getProductDetailsById(id: string): Observable<Product | null>{
      const product = this.getProducts().find(p => p.id === +id);

      if (product){
        return of(product).pipe(delay(2000));
      } else {
        return of(null).pipe(delay(2000));
      }
   }

}
