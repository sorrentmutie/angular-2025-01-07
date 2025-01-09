import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqResRequest, ReqResResponse } from './reqres.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThirdService {
  constructor(private httpClient: HttpClient) { }

  postSomeData(request: ReqResRequest): Observable<ReqResResponse>
  {
     return this.httpClient.post<ReqResResponse>('https://reqres.in/api/users', request);
  }

}
