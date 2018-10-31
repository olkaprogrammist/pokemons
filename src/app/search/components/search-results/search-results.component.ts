import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../models/search-result';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public asList = false;
  public searchResults: SearchResult[] = [{title: 'Kek', id: '1'}];

  constructor() { }

  public ngOnInit() {
  }

}
