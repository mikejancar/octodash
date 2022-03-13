import { createReducer, on } from '@ngrx/store';

import { setUser } from './user.actions';

export const userReducer = createReducer(
  {},
  on(setUser, (state, action) => ({ ...action.user }))
);
