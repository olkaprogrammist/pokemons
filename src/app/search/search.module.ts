import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchCardComponent } from './components/search-card/search-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchBarComponent, SearchResultsComponent, SearchCardComponent]
})
export class SearchModule { }
