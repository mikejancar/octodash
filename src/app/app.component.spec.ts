import { fakeAsync, flush } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const mockToken = new BehaviorSubject('');
  const mockStore: any = {
    pipe: () => mockToken
  };
  let mockRouter: any;

  let component: AppComponent;

  beforeEach(() => {
    mockRouter = {
      navigate: jest.fn()
    };
    component = new AppComponent(mockStore, mockRouter);
  });

  describe('on initialization', () => {
    test('when no token is present, it should do nothing', fakeAsync(() => {
      component.ngOnInit();
      flush();

      expect(mockRouter.navigate.mock.calls.length).toBe(0);
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
