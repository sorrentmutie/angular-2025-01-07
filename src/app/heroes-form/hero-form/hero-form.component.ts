import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  standalone: false,

  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {
   hero = new Hero(1, '', 'Weather Changer', 'Mario Rossi');
   powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

   onSubmit(){
    console.log(this.hero);
   }

}
