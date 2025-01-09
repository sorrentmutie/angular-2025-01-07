import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService{

  private subject$ = new Subject<boolean>();
  spinnerState$ = this.subject$.asObservable();

  showSpinner(){
    this.subject$.next(true);
  }

  hideSpinner(){
    this.subject$.next(false);
  }
}
