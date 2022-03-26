import { Repo } from './repo.interface';
import { Workflow } from './workflow.interface';

export interface GithubState {
  repos: Repo[];
  workflows: Workflow[];
}
