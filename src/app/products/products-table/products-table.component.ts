import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-table',
  standalone: false,
  templateUrl: './products-table.component.html',
})
export class ProductsTableComponent {
  @Input() products: Product[] | undefined = undefined;
  @Output() raiseRemoveProduct = new EventEmitter<Product>();

   constructor(private router: Router){}

   removeProduct(product: Product){
    this.raiseRemoveProduct.emit(product);
   }

   gotoDetails(id: number){
      this.router.navigate(['/products', id]);
   }

}
