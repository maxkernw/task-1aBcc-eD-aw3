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
  get<T>(subredditName: string, limit: number, after?: string): Observable<T> {
     return this.http.get<T>(`${this.baseUrl}/${subredditName}.json?limit=${limit}`)
  }

  getv2<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`)
 }

  getDetail<T>(subredditName: string, id: string): Observable<T> {
    console.log(id)
    return this.http.get<T>(`${this.baseUrl}/${subredditName}/comments/${id}.json`)
  }
}

export interface IHttpService {
  get<T>(name, limit): Observable<T>
}