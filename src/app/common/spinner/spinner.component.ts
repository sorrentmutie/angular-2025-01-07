import { Component } from '@angular/core';
import { SpinnerService } from '../../interceptors/spinner.service';

@Component({
  selector: 'app-spinner',
  standalone: false,

  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  showSpinner = false;
   constructor(private spinnerService: SpinnerService){
    this.spinnerService.spinnerState$.subscribe(
      (show: boolean) => {this.showSpinner = show}
    );

   }
}
