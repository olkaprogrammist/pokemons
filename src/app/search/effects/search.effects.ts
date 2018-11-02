import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  catchError, filter,
  map,
  switchMap,
} from 'rxjs/operators';
import {
  Observable,
  of,
} from 'rxjs';
import {
  Action,
} from '@ngrx/store';
import { SearchService } from '../services/search.service';
import {
  SEARCH_LOAD,
  SearchLoadAction,
  SearchCompleteAction, AllResourcesAction,
} from '../actions/search.action';
import { RouterNavigationAction } from '@ngrx/router-store';
import { SearchResult } from '../models/search-result';

@Injectable()
export class SearchEffects {

  @Effect()
  public searchByText: Observable<Action> = this.actions$.pipe(
    ofType(SEARCH_LOAD),
    map((action: SearchLoadAction) => action.payload),
    switchMap((searchObject) => {
      return this.searchService.getSearchResults(searchObject).pipe(
        map((searchResults) => new SearchCompleteAction({searchObject, searchResults})),
        catchError(() => of(new SearchCompleteAction({
          searchObject,
          searchResults: null
        })))
      );
    })
  );

  @Effect()
  public getAllResources: Observable<Action> = this.actions$.pipe(
    ofType('ROUTER_NAVIGATION'),
    map((action: RouterNavigationAction) =>  action.payload),
    filter((routerState: any) => {
      const {url} = routerState.event;
      return !/resource/.test(url);
    }),
    switchMap((router: any) => {
      return this.searchService.getAllResults().pipe(
        map((item: SearchResult[]) => new AllResourcesAction(item))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private searchService: SearchService,
  ) {
  }
}
