import { Component, OnDestroy, OnInit } from '@angular/core';
import { getFullCard, State } from '../../reducers/search.reducer';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs/index';
import { SearchResult } from '../../models/search-result';

@Component({
  selector: 'app-full-card-container',
  template: `<app-full-card [data]="data"></app-full-card>`
})
export class FullCardContainerComponent implements OnInit, OnDestroy {
  public data: SearchResult;
  private subscription = new Subscription();

  constructor(private store: Store<State>) { }

  public ngOnInit() {
    this.subscription.add(this.store.pipe(select(getFullCard)).subscribe((result: SearchResult) => {
      if (result) {
        this.data = result;
      }
    }));
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
