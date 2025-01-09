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

  constructor(){
    console.log('AppComponent created');
 
    setInterval( () => {
      this.appCounter++;
    },5000)

    setInterval(() => {
      this.secondAppCounter++;
    }, 3000);

  }
}
