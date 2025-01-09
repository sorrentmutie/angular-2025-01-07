import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-demo';
  appCounter = 42;
  secondAppCounter = 0;

  constructor(private toastrService: ToastrService){
    console.log('AppComponent created');
    this.toastrService.success('Hello world!', 'Toastr fun!');

    setInterval( () => {
      this.appCounter++;
    },5000)

    setInterval(() => {
      this.secondAppCounter++;
    }, 3000);

  }
}
