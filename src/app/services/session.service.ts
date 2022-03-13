import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Session } from '../models/session.interface';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: HttpClient) {}

  createSession(): Observable<Session> {
    return this.http.post<Session>(`${environment.apiRoot}/session`, {});
  }

  acquireAccessToken(sessionCode: string): Observable<string> {
    return this.http
      .post<{ accessToken: string }>(`${environment.apiRoot}/token`, { sessionCode })
      .pipe(map((resp) => resp.accessToken));
  }
}
