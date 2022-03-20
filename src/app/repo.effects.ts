import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';

import { getRepos, setRepos } from './repo.actions';
import { GithubService } from './services/github.service';

@Injectable({
  providedIn: 'root',
})
export class RepoEffects {
  constructor(private actions$: Actions, private githubService: GithubService) {}

  getRepos = createEffect(() =>
    this.actions$.pipe(
      ofType(getRepos),
      mergeMap(() => this.githubService.getRepos().pipe(map((repos) => setRepos({ repos }))))
    )
  );
}
