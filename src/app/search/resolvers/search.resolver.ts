import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { State } from '../reducers/search.reducer';
import {
  SearchLoadAction,
} from '../actions/search.action';
import {SearchObject} from '../models/search-object';

@Injectable()
export class SearchResolver implements Resolve<any> {

  constructor(private store: Store<State>) {
  }

  public resolve(route: ActivatedRouteSnapshot) {
    const defaultSearchObject: SearchObject = {
      pageNumber: 0,
    };
    const otherParams = route.queryParams.pageSize ?
      Object.assign({}, defaultSearchObject, { pageSize: +route.queryParams.pageSize })
      : defaultSearchObject;

    if (route.queryParams.query) {
      this.store.dispatch(new SearchLoadAction({
        searchText: route.queryParams.query,
        ...otherParams,
      }));
    }
  }
}

