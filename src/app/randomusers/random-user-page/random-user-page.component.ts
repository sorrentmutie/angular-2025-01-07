import { Component } from '@angular/core';
import { RandomUsersService } from '../random-users.service';
import { RandomUserResponse, Result } from '../random-user.model';

@Component({
  selector: 'app-random-user-page',
  standalone: false,

  templateUrl: './random-user-page.component.html',
  styleUrl: './random-user-page.component.css'
})
export class RandomUserPageComponent {

   results: Result[] | undefined = undefined;

   constructor(private randomUsersService: RandomUsersService) {

       this.randomUsersService.getRandomUsers().subscribe(
        (data) => {
          this.results = data.results;
        });

    }
}
