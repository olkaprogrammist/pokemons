import { async, } from '@angular/core/testing';
import * as Immutable from 'immutable';
import { BehaviorSubject, } from 'rxjs';
import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  const defaultStoreState = {
    search: {
      searchResults: {
        alternativeSearch: 'test_alternativeSearch',
        data: Immutable.Map(),
        totalResults: 5,
      },
      searchObject: {
        pageNum: 0,
      }
    },
    user: {
      pinnedItems: {
        items: []
      }
    }
  };

  let component: PaginatorComponent;
  let mockStore;

  beforeEach(async(() => {
    mockStore = new BehaviorSubject(defaultStoreState);
    mockStore.dispatch = jasmine.createSpy('dispatch');

    component = new PaginatorComponent(mockStore);
  }));

  describe('basic scenario', () => {
    it('should create', () => {
      expect(component).toBeDefined();
    });

    it('should dispatch ChangePageAction', () => {
      component.goToPage(3);
      expect(component.currentPage).toEqual(3);
      expect(mockStore.dispatch).toHaveBeenCalled();
    });
  });
});
