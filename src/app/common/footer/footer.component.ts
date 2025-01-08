import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { SpecialService } from '../special.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  providers: [SpecialService],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {

   @Input() counter: number = 0;
   @Input() secondCounter: number = 0;

   numberOfDiscountProducts: number = 0;

   constructor(private productService: ProductsService,
    public specialService: SpecialService) {
      console.log('FooterComponent created');
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('FooterComponent counter changed');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('FooterComponent initialized');
    this.numberOfDiscountProducts =
    this.productService.getDiscountProducts().length;
  }

   increaseCounter(){
       this.specialService.increaseCounter();
   }

}
