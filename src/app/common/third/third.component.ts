import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  standalone: false,

  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {

  // onKeyup(x: KeyboardEvent) {
  //   const myInput = x.target as HTMLInputElement;
  //   const value = myInput.value;
  //   console.log(value);
  // }

  onKeyup(value: string) {
    console.log(value);
  }

}
