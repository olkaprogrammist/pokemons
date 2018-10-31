import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromSearchResults from './reducers/search.reducer';
import { FullCardComponent } from './components/full-card/full-card.component';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    EffectsModule.forRoot([]),
    RouterModule.forChild([
      { path: '', component: SearchResultsComponent},
      {
        path: 'resource',
        component: FullCardComponent,
      }
    ]),
    StoreModule.forFeature('search', fromSearchResults.reducer),
  ],
  exports: [
    SearchResultsComponent,
  ],
  declarations: [
    SearchBarComponent,
    SearchResultsComponent,
    SearchCardComponent,
    FullCardComponent,
  ]
})
export class SearchModule { }
