import { Component, OnDestroy } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-page',
  standalone: false,
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnDestroy {

   products: Product[] | undefined = undefined;
   discountProducts: Product[] | undefined = undefined;
   subscription: Subscription | undefined = undefined;

   constructor(private productService: ProductsService){

    // const x = fetch('https://jsonplaceholder.typicode.com/posts');

    //this.products = this.productService.getProducts();

   this.subscription =  this.productService.getProductsAsObservable()
      .subscribe(prods => {
           this.products = prods;
      });

    this.discountProducts = this.productService.getDiscountProducts();
   }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
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
