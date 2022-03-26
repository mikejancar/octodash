import { createAction, props } from '@ngrx/store';

import { Repo } from './models/repo.interface';
import { Workflow } from './models/workflow.interface';

export const getRepos = createAction('Get Repos');
export const setRepos = createAction('Set Repos', props<{ repos: Repo[] }>());

export const getWorkflows = createAction('Get Workflows', props<{ owner: string; repo: string }>());
export const getWorkflowsFailed = createAction('Get Workflows failed', props<{ error: Error }>());
export const setWorkflows = createAction('Set Workflows', props<{ workflows: Workflow[] }>());
