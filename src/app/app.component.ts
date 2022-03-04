import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';

import { createSession } from './app.actions';
import { selectSession } from './app.selectors';
import { AppState } from './models/app-state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accessToken$: Observable<string> = this.store.pipe(select(selectSession), map(session => session.accessToken));

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.accessToken$.pipe(take(1)).subscribe((token: string) => {
      if (!token) {
        this.store.dispatch(createSession());
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['dashboard']);
      }
    });

  }
}
