import { async, } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;


  beforeEach(async(() => {
    component = new HeaderComponent();
  }));

  describe('basic scenario', () => {
    it('should create', () => {
      expect(component).toBeDefined();
    });
  });
});
