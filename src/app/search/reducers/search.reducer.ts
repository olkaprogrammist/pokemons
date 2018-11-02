import * as Immutable from 'immutable';
import {
  SearchActions,
  SEARCH_LOAD,
  SEARCH_COMPLETE,
  FULL_CARD, ALL_RESOURCES,
} from '../actions/search.action';
import { SearchObject } from '../models/search-object';
import { SearchResult } from '../models/search-result';
import { s } from '@angular/core/src/render3';

export interface State {
  loading: boolean;
  error: boolean;
  searchObject: SearchObject;
  searchResults: Immutable.List<SearchResult>;
  currentCard: SearchResult;
}

export const initialState: State = {
  loading: false,
  error: false,
  searchObject: null,
  searchResults: Immutable.List(),
  currentCard: null,
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
        };
      }
    }

    case ALL_RESOURCES: {
      debugger
      if (action.payload) {
        return {
          ...state,
          searchResults: Immutable.List(action.payload),
        };
      }
    }

    case FULL_CARD: {
      if (action.payload) {
        return {
          ...state,
          currentCard: action.payload
        };
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

export const getFullCard = (state): SearchResult => {
  return state.search ? state.search.currentCard : null;
};

export const getAllResults = (state): SearchResult[] => {
  debugger
  return state.search ? state.search.searchResults.toJS() : null;
}


