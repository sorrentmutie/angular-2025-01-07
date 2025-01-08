import { Component } from '@angular/core';
import { RandomUsersService } from '../random-users.service';
import { RandomUserResponse, Result } from '../random-user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-random-user-page',
  standalone: false,

  templateUrl: './random-user-page.component.html',
  styleUrl: './random-user-page.component.css'
})
export class RandomUserPageComponent {

   // results: Result[] | undefined = undefined;
   results$: Observable<Result[]> | undefined = undefined;


   constructor(private randomUsersService: RandomUsersService) {

      console.log('RandomUserPageComponent created');
       this.results$ = this.randomUsersService.getFilteredRandomUsers();

      //  this.randomUsersService.getFilteredRandomUsers().subscribe(
      //   (data) => {
      //     this.results = data;
      //   });
    }
}
