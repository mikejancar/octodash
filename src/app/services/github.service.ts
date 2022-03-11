import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AppState } from '../models/app-state.interface';

@Injectable({ providedIn: 'root' })
export class GithubService {
  constructor(private store: Store<AppState>, private http: HttpClient) {}

  acquireAccessToken(sessionCode: string): Observable<string> {
    return this.http
      .post<{ accessToken: string }>(`${environment.apiRoot}/token`, { sessionCode })
      .pipe(map((resp) => resp.accessToken));
  }
}
