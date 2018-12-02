import { Component, Input, } from '@angular/core';
import { SearchResult } from '../../models/search-result';
@Component({
  selector: 'app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.scss']
})
export class FullCardComponent {
  @Input() public data: SearchResult;
}
