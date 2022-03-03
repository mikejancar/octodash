import { createSession } from './app.actions';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const mockStore: any = {
    dispatch: jest.fn()
  };

  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent(mockStore);
  });

  describe('on initialization', () => {
    test('it should create a session', () => {
      component.ngOnInit();
      expect(mockStore.dispatch.mock.calls.length).toBe(1);
      expect(mockStore.dispatch.mock.calls[0][0]).toEqual(createSession());
    });
  });
});
