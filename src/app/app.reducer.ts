import { createReducer, on } from '@ngrx/store';

import { setSession } from './app.actions';

export const initialState = {
  githubClientId: '',
  githubClientSecret: ''
};

export const appReducer = createReducer(
  initialState,
  on(setSession, (state, session) => ({ githubClientId: session.githubClientId, githubClientSecret: session.githubClientSecret }))
)
