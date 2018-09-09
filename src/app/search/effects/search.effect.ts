import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  catchError,
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
  SearchCompleteAction,
} from '../actions/search.action';

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

  constructor(
    private actions$: Actions,
    private searchService: SearchService,
  ) {
  }
}
