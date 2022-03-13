import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';

import { GithubService } from './services/github.service';
import { getUser, setUser } from './user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  constructor(private actions$: Actions, private githubService: GithubService) {}

  getUser = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      mergeMap(() => this.githubService.getUser().pipe(map((user) => setUser({ user }))))
    )
  );
}
