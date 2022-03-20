import { createReducer, on } from '@ngrx/store';

import { Repo } from './models/repo.interface';
import { setRepos } from './repo.actions';

export const repoReducer = createReducer(
  [] as Repo[],
  on(setRepos, (state, action) => [...action.repos])
);
