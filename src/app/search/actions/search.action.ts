import { Action } from '@ngrx/store';
import { SearchObject } from "../models/search-object";

export const SEARCH_LOAD = '[Search] Search loading';
export const SEARCH_COMPLETE = '[Search] Search Completed';

export class SearchLoadAction implements Action {
  public readonly type = SEARCH_LOAD;

  constructor(public payload: SearchObject) {}
}

export class SearchCompleteAction implements Action {
  public readonly type = SEARCH_COMPLETE;

  constructor(public payload: any){}
}

export type SearchActions =
  | SearchLoadAction
  | SearchCompleteAction;
