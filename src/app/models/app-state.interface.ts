import { Repo } from './repo.interface';
import { Session } from './session.interface';
import { User } from './user.interface';

export interface AppState {
  repos: Repo[];
  session: Session;
  user: User;
}
