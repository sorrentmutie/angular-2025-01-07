import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productStar',
  standalone: false
})
export class ProductPipe implements PipeTransform {

  transform(value: Product): string {
    return "*** " + value.name + " ***" + ": " + value.price;
  }

}
