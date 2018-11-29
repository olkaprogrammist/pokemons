import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SearchResult } from '../../models/search-result';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getFullCard, State } from '../../reducers/search.reducer';

@Component({
  selector: 'app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.scss']
})
export class FullCardComponent {
  @Input() public data: SearchResult;

}
