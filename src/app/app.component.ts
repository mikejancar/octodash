import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { createSession } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(createSession());
  }
}
