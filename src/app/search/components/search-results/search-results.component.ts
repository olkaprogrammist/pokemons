import { Component, Input, } from '@angular/core';
import { SearchResult } from '../../models/search-result';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  public asList = true;
  @Input() public searchResults: SearchResult[];
  @Input() public inputControl: FormControl;

  public toggleCardView() {
    this.asList = !this.asList;
  }
}
