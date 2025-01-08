import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomUserResponse } from './random-user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {
  constructor(private httpClient: HttpClient) { }

  getRandomUsers(): Observable<RandomUserResponse> {
    return this.httpClient.get<RandomUserResponse>
        ('https://randomuser.me/api/?results=10');
  }

}
