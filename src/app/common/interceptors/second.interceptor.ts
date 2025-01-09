import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of, tap, throwError } from 'rxjs';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('SecondInterceptor');
    console.log(request);
    const observableResponse = next.handle(request)
      .pipe(
        tap( httpEvent => {
        if(httpEvent instanceof HttpResponse){
          console.log('SecondInterceptor Response');
          console.log(httpEvent);
        }
      }),
      catchError( (error: HttpErrorResponse) => {
        console.log('SecondInterceptor Error');
        console.log(error);
        // return of(new HttpResponse({  }));
        return throwError(error);
      })
    );

    return observableResponse;
  }
}
