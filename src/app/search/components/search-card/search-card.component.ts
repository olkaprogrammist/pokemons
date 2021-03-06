import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from '../../models/search-result';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {
  @Input() public data: SearchResult;
  public name: string;

  public ngOnInit() {
    this.name = this.data.name;
  }

}
