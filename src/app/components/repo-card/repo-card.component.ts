import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectRepoWorkflows } from '../../github.selectors';
import { AppState } from '../../models/app-state.interface';
import { Repo } from '../../models/repo.interface';
import { Workflow } from '../../models/workflow.interface';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css'],
})
export class RepoCardComponent implements OnInit {
  @Input() repo: Repo | undefined;

  workflows$: Observable<Workflow[]> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.workflows$ = this.store.pipe(select(selectRepoWorkflows(this.repo?.name || '')));
  }
}
