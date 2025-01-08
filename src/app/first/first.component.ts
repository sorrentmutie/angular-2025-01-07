import { Component } from '@angular/core';
import { Product } from '../products/product';
import { MyProduct } from '../products/my-product';

export type  MyPoint = {
  x: number;
  y: number;
}

export type ID = string | number;

@Component({
  selector: 'app-first',
  standalone: false,
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
   a: number = 1;
   b: number = 2;

   constructor(){
    setInterval( () => {
      this.a = this.a + 1;
    }  , 1000)
   }


   doSomethingAgain(){
    const x: Product = {
      id :1,
      name: "Product 1",
      description: "Description 1",
      price: 100,
      imageUrl: "https://via.placeholder.com/150",
     // category: { id: 5, name: "Category 5"}
    };

    const z = new MyProduct(1, "Product 1");


   }


    doSomething() {

      let myPoint: MyPoint;
      myPoint = {x: 1, y: 2};
      console.log(myPoint.x);

      let y:ID;
      y = 4;
      y = "false";


      console.log("Hello World");
      let x: number;
      x = this.add1(2,3);
    }


    add1(a: number, b: number): number {
        return a + b;
    }

    add2(a: number, b: number): string {
      return a + " " + b;
    }

    add3(a: number, b: number): boolean {
      return a >= b;
    }

    add4(a: number, b: number): void {
      console.log(a + b);
    }

    add5(a: any, b: any): void {
      console.log(a + b);
    }




}
