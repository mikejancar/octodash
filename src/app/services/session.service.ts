import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Session } from '../models/session.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private http: HttpClient) { }

  createSession(): Observable<Session> {
    return this.http.post(`${environment.apiRoot}/session`, {}).pipe(
      map(resp => resp as Session)
    );
  }
}
