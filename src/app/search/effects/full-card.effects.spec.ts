import { Actions } from '@ngrx/effects';
import { ActionsSubject, } from '@ngrx/store';
import { TestBed, } from '@angular/core/testing';
import { of, throwError, } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { FullCardEffects } from './full-card.effects';
import { SearchService } from '../services/search.service';
import { SearchCompleteAction, SearchLoadAction } from '../actions/search.action';

describe('Full Card Effects', () => {
  let mockActions$;
  let fullCardEffects: FullCardEffects;
  const mockSearchService = {
    getSearchResults: jasmine.createSpy('getSearchResults').and.callFake((res) => of(res)),
    getCardById: jasmine.createSpy('getCardById').and.callFake((res) => of(res)),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FullCardEffects,
        provideMockActions(new Actions(mockActions$ = new ActionsSubject())),
        {provide: SearchService, useValue: mockSearchService},
      ],
    });
  });

  beforeEach(() => {
    fullCardEffects = TestBed.get(FullCardEffects);
  });

  it('should be defined', () => {
    expect(fullCardEffects).toBeDefined();
  });

  it('should take SEARCH_RESULTS_LOAD and emit SEARCH_RESULTS_LOAD_COMPLETE', (done) => {
    fullCardEffects.searchByText.subscribe((action) => {
      expect(mockSearchService.getSearchResults).toHaveBeenCalled();
      expect(action).toEqual(jasmine.any(SearchCompleteAction));
      done();
    });

    mockActions$.next(new SearchLoadAction({searchText: 'text'}));
  });

  it('should emit SearchResultsLoadCompleteAction with null after error on SEARCH_RESULTS_LOAD', (done) => {
    mockSearchService.getSearchResults.and.returnValue(throwError({}));

    fullCardEffects.searchByText.subscribe((action) => {
      expect(action).toEqual(jasmine.any(SearchCompleteAction));
      done();
    });

    mockActions$.next(new SearchLoadAction({searchText: 'not found text'}));
  });

  it('should emit FullCardAction', (done) => {
    fullCardEffects.openFullCard.subscribe((action) => {
      expect(action).toBeTruthy();
      done();
    });

    mockActions$.next({
      type: 'ROUTER_NAVIGATION', payload: {
        routerState: {
          root: {
            queryParams: {query: '1'},
          },
        },
        event: {
          url: '/resource',
        },
      },
    });
  });
});
