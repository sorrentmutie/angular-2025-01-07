import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-table',
  standalone: false,
  templateUrl: './products-table.component.html',
})
export class ProductsTableComponent {
  @Input() products: Product[] | undefined = undefined;
  @Output() raiseRemoveProduct = new EventEmitter<Product>();
   removeProduct(product: Product){
    this.raiseRemoveProduct.emit(product);
   }
}
