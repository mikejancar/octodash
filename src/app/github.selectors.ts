import { createSelector } from '@ngrx/store';

import { AppState } from './models/app-state.interface';

export const selectRepos = (state: AppState) =>
  [...state.github.repos].sort((a, b) => b.pushed_at.localeCompare(a.pushed_at));

export const selectWorkflows = (state: AppState) => state.github.workflows;
export const selectRepoWorkflows = (repoName: string) =>
  createSelector(selectWorkflows, (flows) => flows.filter((flow) => flow.repoName === repoName));
