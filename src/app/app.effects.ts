import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { acquireGithubToken, createSession, setGithubToken, setSession } from './app.actions';
import { Session } from './models/session.interface';
import { GithubService } from './services/github.service';
import { SessionService } from './services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AppEffects {
  constructor(private actions$: Actions, private sessionService: SessionService, private githubService: GithubService) { }

  createSession$ = createEffect(() => this.actions$.pipe(
    ofType(createSession),
    mergeMap(() => this.sessionService.createSession().pipe(
      map((session: Session) => setSession({ ...session }))
    ))
  ));

  acquireGithubToken = createEffect(() => this.actions$.pipe(
    ofType(acquireGithubToken),
    mergeMap(action => this.githubService.acquireAccessToken(action.sessionCode).pipe(
      map((accessToken: string) => setGithubToken({ accessToken }))
    ))
  ));
}
