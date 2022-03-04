import { AppState } from './models/app-state.interface';

export const selectSession = (state: AppState) => state.session;
