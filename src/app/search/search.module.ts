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
import { FullCardEffects } from './effects/full-card.effects';
import { SearchEffects } from './effects/search.effects';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchResultsContainerComponent } from './containers/search-results-container/search-results-container.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    EffectsModule.forFeature([SearchEffects, FullCardEffects]),
    RouterModule.forChild([
      { path: '', component: SearchResultsContainerComponent},
      {
        path: 'resource',
        component: FullCardComponent,
      },
      { path: 'search',
        component: SearchResultsContainerComponent }
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
    PaginatorComponent,
    SearchResultsContainerComponent,
  ]
})
export class SearchModule { }
