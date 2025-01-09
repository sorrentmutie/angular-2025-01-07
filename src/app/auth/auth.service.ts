import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = false;
  currentUser: User | undefined = undefined;

  login(): Observable<boolean>{
    return of(true).pipe(
      delay(2000),
      tap( (logged) => {
        this.isLogged = logged;
        this.currentUser = {
          fullName: 'John Doe',
          email: 'doe@gmail.com',
          picture: "https://via.placeholder.com/150",
          roles: ['user']
        }
      })
    );


  }

  logout(){
    this.currentUser = undefined;
  }
}
