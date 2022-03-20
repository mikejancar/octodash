import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../models/app-state.interface';
import { User } from '../../models/user.interface';
import { selectUser } from '../../user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user$: Observable<User> = this.store.pipe(select(selectUser));

  constructor(private store: Store<AppState>) {}
}
