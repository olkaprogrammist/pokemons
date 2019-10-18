import * as Immutable from 'immutable';
import {
  SearchActions,
  SEARCH_LOAD,
  SEARCH_COMPLETE,
  FULL_CARD,
  LOAD_RESOURCES, CHANGE_PAGE,
} from '../actions/search.action';
import { SearchObject } from '../models/search-object';
import { SearchResult } from '../models/search-result';

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
          searchResults: Immutable.List(action.payload.searchResults),
        };
      }
    }

    case LOAD_RESOURCES: {
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

    case CHANGE_PAGE: {
      if (action.payload) {
        return {
          ...state,
          searchObject: {
            pageNumber: action.payload
          }
        };
      }
    }

    default: {
      return state;
    }
  }
}


export const getSelectedLoading = (state): boolean => {
  return state.search ? state.search.loading : null;
};

export const getFullCard = (state): SearchResult => {
  return state.search ? state.search.currentCard : null;
};

export const getSearchResults = (state): SearchResult[] => {
  return state.search ? state.search.searchResults.toJS() : null;
};


