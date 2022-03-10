import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';

import { selectSession } from '../app.selectors';
import { AppState } from '../models/app-state.interface';
import { Session } from '../models/session.interface';

@Injectable({ providedIn: 'root' })
export class GithubService {
  constructor(private store: Store<AppState>, private http: HttpClient) { }

  acquireAccessToken(sessionCode: string): Observable<string> {
    return this.store.pipe(
      select(selectSession),
      switchMap((session: Session) => this.http.post<{ accessToken: string }>('https://github.com/login/oauth/access_token', {
        clientId: session.githubClientId,
        clientSecret: session.githubClientSecret,
        sessionCode
      }).pipe(map(resp => resp.accessToken))));
  }
}
