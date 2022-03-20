import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { appReducer } from './app.reducer';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { OauthComponent } from './components/oauth/oauth.component';
import { RepoEffects } from './repo.effects';
import { repoReducer } from './repo.reducer';
import { HttpErrorInterceptor } from './services/http-error.interceptor';
import { UserEffects } from './user.effects';
import { userReducer } from './user.reducer';
import { RepoTableComponent } from './components/repo-table/repo-table.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, OauthComponent, HeaderComponent, RepoTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ repos: repoReducer, session: appReducer, user: userReducer }, {}),
    EffectsModule.forRoot([AppEffects, RepoEffects, UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    { provide: Window, useValue: window },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
