import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectRepoWorkflows } from '../../github.selectors';
import { AppState } from '../../models/app-state.interface';
import { Repo } from '../../models/repo.interface';
import { Workflow } from '../../models/workflow.interface';

@Component({
  selector: 'app-repo-table',
  templateUrl: './repo-table.component.html',
  styleUrls: ['./repo-table.component.css'],
})
export class RepoTableComponent {
  @Input() repos: Repo[] | null = [];

  constructor(private store: Store<AppState>) {}

  workflows$(repoName: string): Observable<Workflow[]> {
    return this.store.pipe(select(selectRepoWorkflows(repoName)));
  }
}
