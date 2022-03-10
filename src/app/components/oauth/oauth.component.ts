import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { acquireGithubToken } from '../../app.actions';
import { AppState } from '../../models/app-state.interface';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.store.dispatch(acquireGithubToken({ sessionCode: params['code'] })));
  }

}
