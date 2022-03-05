import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable, take } from 'rxjs';

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
    this.accessToken$.pipe(filter(token => !!token), take(1)).subscribe(() => this.router.navigate(['dashboard']));
  }
}
