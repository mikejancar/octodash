import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { createSession, setSession } from './app.actions';
import { Session } from './models/session.interface';
import { SessionService } from './services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AppEffects {
  constructor(private actions$: Actions, private sessionService: SessionService) { }

  createSession$ = createEffect(() => this.actions$.pipe(
    ofType(createSession),
    mergeMap(() => this.sessionService.createSession().pipe(
      map((session: Session) => setSession({ ...session }))
    ))
  ))
}
