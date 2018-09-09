import { Injectable } from '@angular/core';
import { SearchObject } from "../models/search-object";
import { Observable, of } from "rxjs/index";
import { catchError } from "rxjs/internal/operators";
import { SearchResults } from "../models/search-results";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  private static readonly searchUrl = 'api/search';

  public getSearchResults(query: SearchObject): Observable<SearchResults> {
    const searchText = encodeURIComponent(query.searchText);

    let params = `searchText=${searchText}&pageSize=${query.pageSize}&pageNum=${query.pageNumber}` ;
    const url = `${SearchService.searchUrl}?${params}`;

    return this.http.get(url)
      .pipe(
        catchError((err) => {
          if (err.status === 404) {
            return of({totalResults: 0, data: []});
          }

          return of(null);
        })
      );
  }
}
