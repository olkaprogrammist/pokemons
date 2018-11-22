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

  private subscription = new Subscription();

  constructor(  private router: Router,
                private store: Store<State>,
                private route: ActivatedRoute, ) { }

  public ngOnInit() {
    this.searchInputControl = new FormControl();
    this.subscription.add(this.route.queryParamMap.subscribe((params) => {
      this.searchInputControl.setValue(params.get('query'));
      this.originalSearchQueryValue = params.get('query');
    }));
  }

  public onSearch() {
    this.router.navigate(['/search'], {queryParams: {query: this.searchInputControl.value}});
    this.searchInputControl.setValue('');
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
