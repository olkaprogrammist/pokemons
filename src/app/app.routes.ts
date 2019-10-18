import { Routes } from '@angular/router';
import { AppComponent } from './core/containers/app.component';
import { HeaderComponent } from './core/components/header/header.component';

export const routes: Routes = [
  { path: '', component: HeaderComponent,
    children: [
      { path: '', loadChildren: './search/search.module#SearchModule' },
      // { path: 'search', loadChildren: './search/search.module#SearchModule'},
    ]
  },
];
