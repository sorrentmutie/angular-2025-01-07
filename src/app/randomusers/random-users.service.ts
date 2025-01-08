import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomUserResponse, Result } from './random-user.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {
  constructor(private httpClient: HttpClient) { }

  getRandomUsers(): Observable<RandomUserResponse> {
    return this.httpClient.get<RandomUserResponse>
        ('https://randomuser.me/api/?results=10');
  }

  getFilteredRandomUsers(): Observable<Result[]> {
    return  this.httpClient.get<RandomUserResponse>
        ('https://randomuser.me/api/?results=10')
        .pipe(
           map(  (data) => { return data.results.filter(p => p.gender === 'female')   }));

  }


}
