import { async, } from '@angular/core/testing';
import { SearchResultsComponent } from './search-results.component';

describe('SearchResultsComponent', () => {

  let component: SearchResultsComponent;

  beforeEach(async(() => {
    component = new SearchResultsComponent();
  }));

  describe('basic scenario', () => {
    it('should create', () => {
      expect(component).toBeDefined();
    });

    it('should toggle asList', () => {
      component.asList = true;
      component.toggleCardView();
      expect(component.asList).toBeFalsy();
    });
  });
});
