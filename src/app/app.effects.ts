import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import {
  acquireGithubToken, clearGithubToken, createSession, nada, restoreGithubToken, setGithubToken,
  setSession
} from './app.actions';
import { Session } from './models/session.interface';
import { SessionService } from './services/session.service';

@Injectable({
  providedIn: 'root',
})
export class AppEffects {
  constructor(private actions$: Actions, private sessionService: SessionService, private window: Window) {}

  createSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSession),
      mergeMap(() => this.sessionService.createSession().pipe(map((session: Session) => setSession({ ...session }))))
    )
  );

  acquireGithubToken = createEffect(() =>
    this.actions$.pipe(
      ofType(acquireGithubToken),
      mergeMap((action) =>
        this.sessionService
          .acquireAccessToken(action.sessionCode)
          .pipe(map((accessToken: string) => setGithubToken({ accessToken })))
      )
    )
  );

  saveGithubToken = createEffect(() =>
    this.actions$.pipe(
      ofType(setGithubToken),
      mergeMap((action) => {
        this.window.localStorage.setItem('accessToken', action.accessToken);
        return of(nada());
      })
    )
  );

  clearGithubToken = createEffect(() =>
    this.actions$.pipe(
      ofType(clearGithubToken),
      mergeMap(() => {
        this.window.localStorage.removeItem('accessToken');
        return of(nada());
      })
    )
  );

  restoreGithubToken = createEffect(() =>
    this.actions$.pipe(
      ofType(restoreGithubToken),
      mergeMap(() => {
        const existingToken = this.window.localStorage.getItem('accessToken') || '';
        return of(setGithubToken({ accessToken: existingToken }));
      })
    )
  );
}
