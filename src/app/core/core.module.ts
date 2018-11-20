import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    MatCardModule,
    MatToolbarModule
  ],
  declarations: [HeaderComponent]
})
export class CoreModule {
  public static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
