import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, switchMap, take } from 'rxjs';

import { selectSession } from '../app.selectors';
import { AppState } from '../models/app-state.interface';
import { Repo } from '../models/repo.interface';
import { Session } from '../models/session.interface';
import { User } from '../models/user.interface';
import { Workflow } from '../models/workflow.interface';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private githubRoot = 'https://api.github.com';
  private apiHeaders = (token: string) => ({
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${token}`,
  });

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getUser(): Observable<User> {
    return this.store.pipe(
      select(selectSession),
      take(1),
      switchMap((session: Session) =>
        this.http.get<User>(`${this.githubRoot}/user`, { headers: this.apiHeaders(session.accessToken) })
      )
    );
  }

  getRepos(): Observable<Repo[]> {
    return this.store.pipe(
      select(selectSession),
      take(1),
      switchMap((session: Session) =>
        this.http.get<Repo[]>(`${this.githubRoot}/user/repos`, { headers: this.apiHeaders(session.accessToken) })
      )
    );
  }

  getWorkflows(owner: string, repo: string): Observable<Workflow[]> {
    return this.store.pipe(
      select(selectSession),
      take(1),
      switchMap((session: Session) =>
        this.http
          .get<{ workflows: Workflow[] }>(`${this.githubRoot}/repos/${owner}/${repo}/actions/workflows`, {
            headers: this.apiHeaders(session.accessToken),
          })
          .pipe(map((resp) => resp.workflows))
      )
    );
  }
}
