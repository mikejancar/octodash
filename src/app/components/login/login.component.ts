import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { createSession } from '../../app.actions';
import { selectSession } from '../../app.selectors';
import { AppState } from '../../models/app-state.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clientId$: Observable<string> = this.store.pipe(select(selectSession), map(session => session.githubClientId));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(createSession());
  }
}
