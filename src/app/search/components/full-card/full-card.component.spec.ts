import { async, } from '@angular/core/testing';
import { FullCardComponent } from './full-card.component';

describe('FullCardComponent', () => {

  let component: FullCardComponent;

  beforeEach(async(() => {
    component = new FullCardComponent();
  }));

  describe('basic scenario', () => {
    it('should create', () => {
      expect(component).toBeDefined();
    });
  });
});
