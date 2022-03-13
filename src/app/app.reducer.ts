import { createReducer, on } from '@ngrx/store';

import { clearGithubToken, setGithubToken, setSession } from './app.actions';

export const initialState = {
  githubClientId: '',
  accessToken: '',
};

export const appReducer = createReducer(
  initialState,
  on(setSession, (state, action) => ({ ...state, githubClientId: action.githubClientId })),
  on(setGithubToken, (state, action) => ({ ...state, accessToken: action.accessToken })),
  on(clearGithubToken, (state) => ({ ...state, accessToken: '' }))
);
