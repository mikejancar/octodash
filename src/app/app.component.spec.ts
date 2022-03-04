import { fakeAsync, flush } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { createSession } from './app.actions';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const mockToken = new BehaviorSubject('');
  const mockStore: any = {
    pipe: () => mockToken
  };
  const mockRouter: any = {}

  let component: AppComponent;

  beforeEach(() => {
    mockStore.dispatch = jest.fn();
    mockRouter.navigate = jest.fn();
    component = new AppComponent(mockStore, mockRouter);
  });

  // TODO: Update tests to reflect new conditional logic
  describe('on initialization', () => {
    test('when no token is present, it should create a session and route to login', fakeAsync(() => {
      component.ngOnInit();
      flush();

      expect(mockStore.dispatch.mock.calls.length).toBe(1);
      expect(mockStore.dispatch.mock.calls[0][0]).toEqual(createSession());

      expect(mockRouter.navigate.mock.calls.length).toBe(1);
      expect(mockRouter.navigate.mock.calls[0][0]).toEqual(['login']);
    }));

    test('when a token is present, it should route to the dashboard', fakeAsync(() => {
      mockToken.next('token');
      component.ngOnInit();
      flush();

      expect(mockRouter.navigate.mock.calls.length).toBe(1);
      expect(mockRouter.navigate.mock.calls[0][0]).toEqual(['dashboard']);
    }));
  });
});
