import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../models/search-result';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getAllResults, State } from '../../reducers/search.reducer';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public asList = false;
  public searchResults: SearchResult[];
  private subscription = new Subscription();

  constructor(private store: Store<State>) { }

  public ngOnInit() {
    this.subscription.add(this.store.pipe(select(getAllResults)).subscribe((result) => {
      if (result) {
        this.searchResults = result;
      }
    }));
  }
}
