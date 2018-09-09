import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
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
