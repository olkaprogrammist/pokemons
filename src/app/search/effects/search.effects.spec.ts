import { Actions } from '@ngrx/effects';
import { ActionsSubject, } from '@ngrx/store';
import { TestBed, } from '@angular/core/testing';
import { of, throwError, } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { SearchService } from '../services/search.service';
import { ChangePageAction, SearchCompleteAction, SearchLoadAction } from '../actions/search.action';
import { SearchEffects } from './search.effects';
import { Router } from '@angular/router';

describe('Search Effects', () => {
  let mockActions$;
  let searchEffects: SearchEffects;
  let mockRouter;

  const mockSearchService = {
    getSearchResults: jasmine.createSpy('getSearchResults').and.callFake((res) => of(res)),
    getCurrentPage: jasmine.createSpy('getCurrentPage').and.callFake((res) => of(res)),
  };

  beforeEach(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
    };
    TestBed.configureTestingModule({
      providers: [
        SearchEffects,
        provideMockActions(new Actions(mockActions$ = new ActionsSubject())),
        {provide: SearchService, useValue: mockSearchService},
        {provide: Router, useValue: mockRouter},
      ],
    });
  });

  beforeEach(() => {
    searchEffects = TestBed.get(SearchEffects);
  });

  it('should be defined', () => {
    expect(searchEffects).toBeDefined();
  });

  it('should take SEARCH_RESULTS_LOAD and emit SEARCH_RESULTS_LOAD_COMPLETE', (done) => {
    searchEffects.searchByText.subscribe((action) => {
      expect(mockSearchService.getSearchResults).toHaveBeenCalled();
      expect(action).toEqual(jasmine.any(SearchCompleteAction));
      done();
    });

    mockActions$.next(new SearchLoadAction({searchText: 'text'}));
  });

  it('should emit SearchResultsLoadCompleteAction with null after error on SEARCH_RESULTS_LOAD', (done) => {
    mockSearchService.getSearchResults.and.returnValue(throwError({}));

    searchEffects.searchByText.subscribe((action) => {
      expect(action).toEqual(jasmine.any(SearchCompleteAction));
      done();
    });

    mockActions$.next(new SearchLoadAction({searchText: 'not found text'}));
  });

  it('should emit LoadResourceAction for first page', (done) => {
    searchEffects.getFirstPage.subscribe((action) => {
      expect(action).toBeTruthy();
      done();
    });

    mockActions$.next({
      type: 'ROUTER_NAVIGATION', payload: {
        routerState: {
          root: {
            queryParams: {query: ''},
          },
        },
        event: {
          url: '/',
        },
      },
    });
  });

  it('should emit LoadResourceAction for pagination', (done) => {
    searchEffects.getCurrentPage.subscribe((action) => {
      expect(action).toBeTruthy();
      done();
    });

    mockActions$.next(new ChangePageAction(3));
  });

  it('should emit SearchLoadAction', (done) => {
    searchEffects.searchLoad.subscribe((action) => {
      expect(action).toBeTruthy();
      done();
    });

    mockActions$.next({
      type: 'ROUTER_NAVIGATION', payload: {
        routerState: {
          root: {
            queryParams: {query: 'vasya'},
          },
        },
        event: {
          url: '/search',
        },
      },
    });
  });

  it('should navigate to home page when empty search', () => {
    searchEffects.navigateToEmptySearch.subscribe((action) => {
      expect(action).toBeTruthy();
    });

    mockActions$.next({
      type: 'ROUTER_NAVIGATION', payload: {
        routerState: {
          root: {
            queryParams: {query: ''},
          },
        },
        event: {
          url: '',
        },
      },
    });
    expect(mockRouter.navigate).toHaveBeenCalled();
  });
});
