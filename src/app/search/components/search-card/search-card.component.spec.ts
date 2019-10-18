import { async, } from '@angular/core/testing';
import { SearchCardComponent } from './search-card.component';


describe('SearchCardComponent', () => {
  let component: SearchCardComponent;

  beforeEach(async(() => {
    component = new SearchCardComponent();
  }));

  describe('basic scenario', () => {
    it('should create', () => {
      expect(component).toBeDefined();
    });
  });
});
