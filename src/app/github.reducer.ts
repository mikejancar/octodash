import { createReducer, on } from '@ngrx/store';

import { setRepos, setWorkflows } from './github.actions';
import { GithubState } from './models/github-state.interface';

export const githubReducer = createReducer<GithubState>(
  { repos: [], workflows: [] },
  on(setRepos, (state, action) => ({ ...state, repos: [...state.repos, ...action.repos] })),
  on(setWorkflows, (state, actions) => ({ ...state, workflows: [...state.workflows, ...actions.workflows] }))
);
