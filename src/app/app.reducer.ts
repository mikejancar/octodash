import { createReducer, on } from '@ngrx/store';

import { setGithubToken, setSession } from './app.actions';

export const initialState = {
  githubClientId: '',
  githubClientSecret: '',
  accessToken: ''
};

export const appReducer = createReducer(
  initialState,
  on(setSession, (state, action) => ({ ...state, githubClientId: action.githubClientId, githubClientSecret: action.githubClientSecret })),
  on(setGithubToken, (state, action) => ({ ...state, accessToken: action.accessToken }))
)
