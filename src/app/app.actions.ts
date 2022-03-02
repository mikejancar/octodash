import { createAction, props } from '@ngrx/store';

import { Session } from './models/session.interface';

export const createSession = createAction('Create Session');
export const setSession = createAction('Set Session', props<Session>());
