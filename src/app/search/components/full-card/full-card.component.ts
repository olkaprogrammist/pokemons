import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchResult } from '../../models/search-result';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getFullCard, State } from '../../reducers/search.reducer';

@Component({
  selector: 'app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.scss']
})
export class FullCardComponent implements OnInit, OnDestroy {
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
