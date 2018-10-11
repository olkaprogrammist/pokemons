import { Routes } from '@angular/router';
import { AppComponent } from './core/containers/app.component';

export const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      { path: '', loadChildren: './search/search.module#SearchModule' },
      { path: 'search', loadChildren: './search/search.module#SearchModule'},
    ]
  },
];
