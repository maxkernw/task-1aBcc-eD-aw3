import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHttpService } from './http.service.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements IHttpService {

  private baseUrl = environment.url;

  constructor(private http: HttpClient) { }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`)
  }
}