import { createAction, props } from '@ngrx/store';

import { Repo } from './models/repo.interface';

export const getRepos = createAction('Get Repos');
export const setRepos = createAction('Set Repos', props<{ repos: Repo[] }>());
