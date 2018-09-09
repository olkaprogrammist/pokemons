import * as Immutable from 'immutable';
import {
  SearchActions,
  SEARCH_LOAD,
  SEARCH_COMPLETE,
} from '../actions/search.action';
import { SearchObject } from '../models/search-object';

export interface State {
  loading: boolean;
  error: boolean;
  searchObject: SearchObject;
  searchResults: Immutable.Map<string, {}>,
}

export const initialState: State = {
  loading: false,
  error: false,
  searchObject: null,
  searchResults: Immutable.Map({}),
};

export function reducer(state = initialState, action: SearchActions): State {
  switch (action.type) {
    case SEARCH_LOAD: {
      if (action.payload) {
          return {
            ...state,
            loading: true,
            searchObject: action.payload,
          };
      }
    }

    case SEARCH_COMPLETE: {
      if (action.payload) {
        return {
          ...state,
          loading: false,
          searchResults: action.payload,
        }
      }
    }

    default: {
      return state;
    }
  }
}


export const getSearchResults = (state): any => {
  return state.search ? state.search.searchResults : null;
};

export const getSelectedLoading = (state): boolean => {
  return state.search ? state.search.loading : null;
};


