import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/index';
import { SearchResult } from '../../models/search-result';
import { getSearchResults, State } from '../../reducers/search.reducer';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-results-container',
  template: `<app-search-results [searchResults]="searchResults" [inputControl]="inputControl"></app-search-results>`
})
export class SearchResultsContainerComponent implements OnInit, OnDestroy {
  public searchResults: SearchResult[];
  public inputControl: FormControl;
  private subscription = new Subscription();

  constructor(private store: Store<State>,
              private route: ActivatedRoute, ) { }

  public ngOnInit() {
    this.subscription.add(this.store.pipe(select(getSearchResults)).subscribe((result) => {
      if (result) {
        this.searchResults = result;
      }
    }));
    this.inputControl = new FormControl();
    this.subscription.add(this.route.queryParamMap.subscribe((params) => {
      this.inputControl.setValue(params.get('query'));
    }));
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
