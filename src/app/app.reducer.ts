import { createReducer, on } from '@ngrx/store';

import { setSession } from './app.actions';

export const initialState = {
  githubClientId: '',
  githubClientSecret: '',
  accessToken: ''
};

export const appReducer = createReducer(
  initialState,
  on(setSession, (state, session) => ({ ...state, githubClientId: session.githubClientId, githubClientSecret: session.githubClientSecret }))
)
