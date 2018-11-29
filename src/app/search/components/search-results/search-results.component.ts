import { Component, Input, OnInit, } from '@angular/core';
import { SearchResult } from '../../models/search-result';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public asList = true;
  @Input() public searchResults: SearchResult[];

  constructor() { }

  public ngOnInit() {
  }

  public toggleCardView() {
    this.asList = !this.asList;
  }
}
