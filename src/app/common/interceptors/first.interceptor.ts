import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  myToken = '1234567890';
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let clonedRequest =
      request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.myToken}`
        }
      });

    console.log('FirstInterceptor');
    console.log(request);
    return next.handle(clonedRequest);
  }
}
