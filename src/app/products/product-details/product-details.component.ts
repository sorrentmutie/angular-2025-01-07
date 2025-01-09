import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  standalone: false,

  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
     productDetails: Product | null = null;
     id: string | null = null;
     constructor(private route: ActivatedRoute,
                 private service: ProductsService){ {
      this.id = this.route.snapshot.paramMap.get('id');
      if(this.id){
         this.service.getProductDetailsById(this.id).subscribe(
           product => this.productDetails = product
         );
      }
     }
    }
}
