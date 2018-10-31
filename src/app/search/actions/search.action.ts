import { Action } from '@ngrx/store';
import { SearchObject } from '../models/search-object';
import { SearchResult } from '../models/search-result';

export const SEARCH_LOAD = '[Search] Search loading';
export const SEARCH_COMPLETE = '[Search] Search Completed';
export const FULL_CARD = '[Full Card] Get full card info';

export class SearchLoadAction implements Action {
  public readonly type = SEARCH_LOAD;

  constructor(public payload: SearchObject) {}
}

export class SearchCompleteAction implements Action {
  public readonly type = SEARCH_COMPLETE;

  constructor(public payload: any) {}
}

export class FullCardAction implements Action {
  public readonly type = FULL_CARD;

  constructor(public payload: SearchResult) {}
}

export type SearchActions =
  | SearchLoadAction
  | SearchCompleteAction
  | FullCardAction;
