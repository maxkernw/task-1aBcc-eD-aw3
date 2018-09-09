import { Observable } from 'rxjs';

export interface IHttpService {
    get<T>(path: string): Observable<T>
  }