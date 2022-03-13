import { Session } from './session.interface';
import { User } from './user.interface';

export interface AppState {
  session: Session;
  user: User;
}
