import { GithubState } from './github-state.interface';
import { Session } from './session.interface';
import { User } from './user.interface';

export interface AppState {
  github: GithubState;
  session: Session;
  user: User;
}
