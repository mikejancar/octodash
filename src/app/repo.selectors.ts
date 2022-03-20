import { AppState } from './models/app-state.interface';

export const selectRepos = (state: AppState) => [...state.repos].sort((a, b) => b.pushed_at.localeCompare(a.pushed_at));
