import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { selectSession } from '../../app.selectors';
import { AppState } from '../../models/app-state.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  clientId$: Observable<string> = this.store.pipe(select(selectSession), map(session => session.githubClientId));

  constructor(private store: Store<AppState>) { }
}
