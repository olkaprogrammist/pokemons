import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../models/search-result';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getSearchResults, State } from '../../reducers/search.reducer';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public asList = false;
  public searchResults: SearchResult[];
  public pageEvent: PageEvent;
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
