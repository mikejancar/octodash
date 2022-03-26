import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getRepos } from '../../github.actions';
import { selectRepos } from '../../github.selectors';
import { AppState } from '../../models/app-state.interface';
import { Repo } from '../../models/repo.interface';
import { User } from '../../models/user.interface';
import { getUser } from '../../user.actions';
import { selectUser } from '../../user.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user$: Observable<User> = this.store.pipe(select(selectUser));
  repos$: Observable<Repo[]> = this.store.pipe(select(selectRepos));

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getUser());
    this.store.dispatch(getRepos());
  }
}
