import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './core/containers/app.component';
import { CoreModule } from './core/core.module';
import { SearchModule } from './search/search.module';
import { StoreModule } from '@ngrx/store';
import {
  reducers,
  metaReducers,
} from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    SearchModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    StoreModule.forRoot(reducers, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
