import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/index';
import { SearchResult } from '../../models/search-result';
import { getSearchResults, State } from '../../reducers/search.reducer';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-search-results-container',
  template: `<app-search-results [searchResults]="searchResults"></app-search-results>`
})
export class SearchResultsContainerComponent implements OnInit {
  public searchResults: SearchResult[];
  private subscription = new Subscription();

  constructor(private store: Store<State>) { }

  public ngOnInit() {
    this.subscription.add(this.store.pipe(select(getSearchResults)).subscribe((result) => {
      if (result) {
        this.searchResults = result;
      }
    }));
  }
}
