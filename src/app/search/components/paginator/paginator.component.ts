import { Component, OnInit, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/search.reducer';
import { ChangePageAction } from '../../actions/search.action';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  public currentPage = 1;

  public constructor( private store: Store<State>) { }

  public ngOnInit() {
  }

  public goToPage(pageNum) {
    this.currentPage = pageNum;
    this.store.dispatch(new ChangePageAction(pageNum));
  }

}
