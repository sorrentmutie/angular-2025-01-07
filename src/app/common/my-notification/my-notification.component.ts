import { Component } from '@angular/core';
import { NotificationService } from '../notifications/notification.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-notification',
  standalone: false,

  templateUrl: './my-notification.component.html',
  styleUrl: './my-notification.component.css'
})
export class MyNotificationComponent {
   constructor(private notificationService: NotificationService,
               private toastrService: ToastrService)
  {
     this.notificationService.notifications$.subscribe(
       notification => {
          if(notification.color === "red"){
              this.toastrService.error(notification.content, notification.title);
          } else if(notification.color === "green"){
              this.toastrService.success(notification.content, notification.title);
          } else {
              this.toastrService.info(notification.content, notification.title);
          }

       }
     )

   }
}
