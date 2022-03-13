import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, switchMap, take } from 'rxjs';

import { selectSession } from '../app.selectors';
import { AppState } from '../models/app-state.interface';
import { Session } from '../models/session.interface';
import { User } from '../models/user.interface';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private githubRoot = 'https://api.github.com';
  private apiHeaders = (token: string) => ({
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${token}`,
  });

  constructor(private http: HttpClient, private window: Window, private store: Store<AppState>) {}

  getUser(): Observable<User> {
    return this.store.pipe(
      select(selectSession),
      take(1),
      switchMap((session: Session) =>
        this.http.get<User>(`${this.githubRoot}/user`, { headers: this.apiHeaders(session.accessToken) })
      )
    );
  }
}
