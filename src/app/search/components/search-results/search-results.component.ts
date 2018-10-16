import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../models/search-result';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public asList = true;
  public searchResults: SearchResult[] = [{title: 'Kek', id: '1'}];

  constructor() { }

  public ngOnInit() {
  }

}
