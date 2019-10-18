import { async, } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let mockRouter;

  beforeEach(async(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
    };
    component = new SearchBarComponent(mockRouter);
  }));

  describe('basic scenario', () => {
    // it('should navigate on search', () => {
    //   component.onSearch();
    //   expect(mockRouter.navigate).toHaveBeenCalled();
    // });

    it('should create', () => {
      expect(component).toBeDefined();
    });
  });
});
