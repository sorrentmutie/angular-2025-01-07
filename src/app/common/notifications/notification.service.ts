import { Injectable } from '@angular/core';
import { MyNotification } from './my-notification';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private subject$ = new Subject<MyNotification>();
  notifications$ = this.subject$.asObservable();

  constructor() { }

  showNotification(notification: MyNotification){
    this.subject$.next(notification);
  }

}
