import { createAction, props } from '@ngrx/store';

import { User } from './models/user.interface';

export const getUser = createAction('Get User');
export const setUser = createAction('Set User', props<{ user: User }>());
