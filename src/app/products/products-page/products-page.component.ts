import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-page',
  standalone: false,
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

   products: Product[] | undefined = undefined;
   discountProducts: Product[] | undefined = undefined;

   constructor(){
     this.products = this.getProducts();
     this.discountProducts = this.getDiscountProducts();
   }

   getDiscountProducts(): Product[] {
     return [
      {id: 8, name: "Radio", description: "Radio AM/FM", price: 50,
        imageUrl: "https://via.placeholder.com/150"},
     ]
   }

   getProducts(): Product[] {
      return [
        { id:1, name: "Frigorifero",
           description: "Frigorifero Samsung",
            price: 500, imageUrl: "https://via.placeholder.com/150"},
            {
              id: 2, name: "TV Color",
               description: "TV 4k",
               price: 300, imageUrl: "https://via.placeholder.com/150"
            },
            {
              id: 3, name: "Microwave",
               description: "4500 W",
               price: 120, imageUrl: "https://via.placeholder.com/150"
            }
      ];
   }

   removeProduct(product: Product){
     const index = this.products?.indexOf(product);
     if(index !== undefined && index !== -1){
       this.products?.splice(index, 1);
     }

   }

   removeDiscountProduct(product: Product){
      if(product.id %2 === 0){
        this.discountProducts = [];
      }
   }

}
