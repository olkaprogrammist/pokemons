import * as Immutable from 'immutable';
import { SearchResult } from '../models/search-result';
import { initialState, reducer, getSelectedLoading, getFullCard, getSearchResults } from './search.reducer';
import {
  ChangePageAction,
  FullCardAction,
  LoadResourceAction,
  SearchCompleteAction,
  SearchLoadAction,
} from '../actions/search.action';

describe('reducer: Search', () => {
  const searchResult: SearchResult = {
    id: '1',
    name: '1'
  };

  const searchResult2: SearchResult = {
    id: '2',
    name: '2'
  };

  it('should change loading to true', () => {
     expect(reducer(initialState, new SearchLoadAction({
       searchText: 'Vasya'
    }))).toEqual(jasmine.objectContaining({
       loading: true,
       searchObject: {searchText: 'Vasya'}
    }));
  });

  it('should set searchResults from payload', () => {
     expect(reducer(initialState, new SearchCompleteAction({searchResults: [
       {
         id: '1',
         name: '1'
       }
    ]}))).toEqual(jasmine.objectContaining({
       loading: false,
       searchResults: Immutable.List([{
         id: '1',
         name: '1'
       }]),
    }));
  });

  it('should set currentCard from payload', () => {
    expect(reducer(initialState, new FullCardAction(searchResult))).toEqual(
      jasmine.objectContaining({
        currentCard: searchResult
      })
    );
  });

  it('should set searchResults from payload (load data)', () => {
    expect(reducer(initialState, new LoadResourceAction([
        {
          id: '1',
          name: '1'
        }
      ]))).toEqual(jasmine.objectContaining({
      loading: false,
      searchResults: Immutable.List([{
        id: '1',
        name: '1'
      }]),
    }));
  });

  it('should change page number', () => {
    expect(reducer(initialState, new ChangePageAction(3))).toEqual(
      jasmine.objectContaining({
        searchObject: {
          pageNumber: 3
        }
      })
    );
  });

  it('should return default state', () => {
    expect(reducer(undefined, new SearchCompleteAction(null))).toEqual(initialState);
  });

  it('should return loading from state', () => {
    expect(getSelectedLoading({search: {
        loading: false,
      }})).toEqual(false);
  });

  it('should return currentCard from state', () => {
    expect(getFullCard({search: {
        currentCard: {
          id: '1',
          name: '1'
        }
      }})).toEqual(
      {
        id: '1',
        name: '1'
      }
    );
  });

  it('should return searchResults from state', () => {
    expect(getSearchResults({search: {
        searchResults: Immutable.List([searchResult, searchResult2])
      }})).toEqual([searchResult, searchResult2]);
  });
});
