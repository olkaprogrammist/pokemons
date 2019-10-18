import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  catchError,
  filter,
  map,
  switchMap,
  tap,
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
  CHANGE_PAGE,
  ChangePageAction,
  LoadResourceAction,
} from '../actions/search.action';
import { RouterNavigationAction } from '@ngrx/router-store';
import { SearchResult } from '../models/search-result';
import { Router } from '@angular/router';

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
  public getFirstPage: Observable<Action> = this.actions$.pipe(
    ofType('ROUTER_NAVIGATION'),
    map((action: RouterNavigationAction) =>  action.payload),
    filter((routerState: any) => {
      const { url } = routerState.event;
      return !/resource/.test(url) && !/search/.test(url);
    }),
    switchMap(() => {
      return this.searchService.getCurrentPage(1).pipe(
        map((item: SearchResult[]) => new LoadResourceAction(item))
      );
    })
  );

  @Effect()
  public getCurrentPage: Observable<Action> = this.actions$.pipe(
    ofType(CHANGE_PAGE),
    map((action: ChangePageAction) => action.payload),
    switchMap((pageNum: number) => {
      return this.searchService.getCurrentPage(pageNum).pipe(
        map((item: SearchResult[]) => new LoadResourceAction(item))
      );
    })
  );

  @Effect()
  public searchLoad: Observable<Action> = this.actions$.pipe(
    ofType('ROUTER_NAVIGATION'),
    map((action: RouterNavigationAction) => action.payload),
    filter((routerState: any) => {
      const { url } = routerState.event;
      return /search/.test(url);
    }),
    map((routerState: any) => {
      const searchText = routerState.routerState.root.queryParams.query;
      return new SearchLoadAction({searchText});
    })
  );

  @Effect({dispatch: false})
  public navigateToEmptySearch = this.actions$.pipe(
    ofType('ROUTER_NAVIGATION'),
    map((action: RouterNavigationAction) => action.payload),
    filter((routerState: any) => routerState.event.url === ''),
    tap(() => this.router.navigate(['/']))
  );

  constructor(
    private actions$: Actions,
    private searchService: SearchService,
    private router: Router,
  ) {
  }
}
