import { createAction, props } from '@ngrx/store';

import { Session } from './models/session.interface';

export const createSession = createAction('Create Session');
export const setSession = createAction('Set Session', props<Session>());
export const acquireGithubToken = createAction('Acquire GitHub Token', props<{ sessionCode: string }>());
export const setGithubToken = createAction('Set GitHub token', props<{ accessToken: string }>());
export const clearGithubToken = createAction('Clear GitHub token');
export const restoreGithubToken = createAction('Restore GitHub token');
export const nada = createAction('nada');
