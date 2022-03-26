import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

import {
  getRepos, getWorkflows, getWorkflowsFailed, setRepos, setWorkflows
} from './github.actions';
import { GithubService } from './services/github.service';

@Injectable({
  providedIn: 'root',
})
export class GithubEffects {
  constructor(private actions$: Actions, private githubService: GithubService) {}

  getRepos = createEffect(() =>
    this.actions$.pipe(
      ofType(getRepos),
      switchMap(() => this.githubService.getRepos().pipe(map((repos) => setRepos({ repos }))))
    )
  );

  getRepoWorkflows = createEffect(() =>
    this.actions$.pipe(
      ofType(setRepos),
      switchMap((action) => action.repos.map((repo) => getWorkflows({ owner: repo.owner.login, repo: repo.name })))
    )
  );

  getWorkflows = createEffect(() =>
    this.actions$.pipe(
      ofType(getWorkflows),
      mergeMap((action) =>
        this.githubService.getWorkflows(action.owner, action.repo).pipe(
          map((workflows) =>
            setWorkflows({ workflows: workflows.map((flow) => ({ ...flow, repoName: action.repo })) })
          ),
          catchError((error) => of(getWorkflowsFailed({ error })))
        )
      )
    )
  );
}
