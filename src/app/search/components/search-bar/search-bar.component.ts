import { Component, Input, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() searchInputControl: FormControl;

  constructor(private router: Router) { }

  public onSearch() {
    this.router.navigate(['/search'], {queryParams: {query: this.searchInputControl.value}});
    this.searchInputControl.setValue('');
  }
}
