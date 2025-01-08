import { Component } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { SpecialService } from '../special.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  providers: [SpecialService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

   numberOfDiscountProducts: number = 0;

   constructor(private productService: ProductsService,
    public specialService: SpecialService) {
      this.numberOfDiscountProducts =
      this.productService.getDiscountProducts().length;
   }

   increaseCounter(){
       this.specialService.increaseCounter();
   }

}
