import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/search.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public searchInputControl: FormControl;
  public originalSearchQueryValue: string;

  private routeSubscription: Subscription = new Subscription();

  constructor(  private router: Router,
                private store: Store<State>,
                private route: ActivatedRoute, ) { }

  public ngOnInit() {
    this.routeSubscription = this.route.queryParamMap.subscribe((params) => {
      this.searchInputControl.setValue(params.get('query'));
      this.originalSearchQueryValue = params.get('query');
    });
  }

  public onSearch() {
    debugger
    this.router.navigate(['/search'], {queryParams: {query: this.searchInputControl.value}});
    this.clearSearch();
  }

  public clearSearch() {
    this.searchInputControl.setValue('');
  }

  public ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
