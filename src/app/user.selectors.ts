import { AppState } from './models/app-state.interface';

export const selectUser = (state: AppState) => state.user;
