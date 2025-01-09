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
import { SpinnerService } from '../../interceptors/spinner.service';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('SecondInterceptor');
    console.log(request);
    this.spinnerService.showSpinner();
    const observableResponse = next.handle(request)
      .pipe(
        tap( httpEvent => {
        if(httpEvent instanceof HttpResponse){
          this.spinnerService.hideSpinner();
        }
      }),
      catchError( (error: HttpErrorResponse) => {
        this.spinnerService.hideSpinner();
        // return of(new HttpResponse({  }));
        return throwError(error);
      })
    );

    return observableResponse;
  }
}
