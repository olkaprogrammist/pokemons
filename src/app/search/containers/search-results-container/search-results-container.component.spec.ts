// import {
//   Component,
//   Input,
// } from '@angular/core';
// import {
//   async,
//   ComponentFixture,
//   TestBed,
// } from '@angular/core/testing';
// import { Store } from '@ngrx/store';
// import { SearchResult } from '../../models/search-result';
// import { of } from 'rxjs';
// import { SearchResultsContainerComponent } from './search-results-container.component';
// import { FormControl } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
// import * as Immutable from 'immutable';
//
// @Component({
//   selector: 'app-search-results',
//   template: '<div></div>'
// })
// export class FakeSearchResultsComponent {
//   @Input() public searchResults: SearchResult[];
//   @Input() public inputControl: FormControl;
// }
//
// let mockStore;
//
// describe('SearchResultsContainerComponent', () => {
//   let component: SearchResultsContainerComponent;
//   let fixture: ComponentFixture<SearchResultsContainerComponent>;
//
//   mockStore = new BehaviorSubject({
//     search: {
//       loading: false,
//       error: false,
//       searchObject: null,
//       searchResults: [
//         {
//           id: '1',
//           name: '1'
//         },
//         {
//           id: '2',
//           name: '2'
//         }
//         ],
//       currentCard: null,
//     }
//   });
//
//   mockStore.select = jasmine.createSpy('select').and.returnValue(of([
//     {
//       id: '1',
//       name: '1'
//     },
//     {
//       id: '2',
//       name: '2'
//     }
//   ]));
//
//   const activeRouteMock = {
//     queryParams: of({query: '1'}),
//   };
//
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [],
//       declarations: [
//         SearchResultsContainerComponent,
//         FakeSearchResultsComponent,
//       ],
//       providers: [
//         {provide: Store, useValue: mockStore},
//         {provide: ActivatedRoute, useValue: activeRouteMock},
//       ]
//     });
//   }));
//
//   beforeEach(async(() => {
//     fixture = TestBed.createComponent(SearchResultsContainerComponent);
//     component = fixture.componentInstance;
//     component.searchResults = [{
//       id: '1',
//       name: 'Vasya',
//     }];
//     component.inputControl = new FormControl();
//     component.ngOnInit();
//     fixture.detectChanges();
//   }));
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
