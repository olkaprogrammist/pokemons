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
// import { FullCardContainerComponent } from './full-card-container.component';
// import { of } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
//
// @Component({
//   selector: 'app-full-card',
//   template: '<div></div>'
// })
// export class FakeFullCardComponent {
//   @Input() public data: SearchResult;
// }
//
// let mockStore;
//
// describe('FullCardContainerComponent', () => {
//   let component: FullCardContainerComponent;
//   let fixture: ComponentFixture<FullCardContainerComponent>;
//
//   mockStore = new BehaviorSubject({
//     search: {
//       loading: false,
//       error: false,
//       searchObject: null,
//       searchResults: [],
//       currentCard: {
//         id: '1',
//         name: '1'
//       },
//     }
//   });
//
//   mockStore.select = jasmine.createSpy('select').and.returnValue(of({
//       id: '1',
//       name: '1'
//     }));
//
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [],
//       declarations: [
//        FullCardContainerComponent,
//        FakeFullCardComponent,
//       ],
//       providers: [
//         {provide: Store, useValue: mockStore},
//       ]
//     });
//   }));
//
//   beforeEach(async(() => {
//     fixture = TestBed.createComponent(FullCardContainerComponent);
//     component = fixture.componentInstance;
//     component.data = {
//       id: '1',
//       name: 'Vasya',
//     };
//     component.ngOnInit();
//     fixture.detectChanges();
//   }));
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
