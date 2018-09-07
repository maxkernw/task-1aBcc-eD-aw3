import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements IHttpService {

  private baseUrl = environment.url;

  constructor(private http: HttpClient) {

  }
  get<T>(name, limit): Observable<T> {
     return this.http.get<T>(`${this.baseUrl}/${name}.json?limit=${limit}`)
  }
}

export interface IHttpService {
  get<T>(name, limit): Observable<T>
}