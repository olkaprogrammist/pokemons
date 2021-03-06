import { Injectable } from '@angular/core';
import { SearchObject } from '../models/search-object';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { SearchResult } from '../models/search-result';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  private static readonly searchUrl = 'http://localhost:3000/pokemons';
  private static readonly pageSize = 12;

  public getSearchResults(query: SearchObject): Observable<any> {
    const searchText = encodeURIComponent(query.searchText);

    const params = `q=${searchText}`;
    const url = `${SearchService.searchUrl}?${params}`;

    return this.http.get(url)
      .pipe(
        catchError((err) => {
          if (err.status === 404) {
            return of({data: []});
          }

          return of(null);
        })
      );
  }

  public getCardById(id: string): Observable<SearchResult> {
    const url = `${SearchService.searchUrl}/${id}`;
    return this.http.get(url)
      .pipe(
        catchError((err) => {
          if (err.status === 404) {
            return of({id: '-1'});
          }

          return of(null);
        })
      );
  }

  public getCurrentPage(page: number): Observable<SearchResult[]> {
    const url = `${SearchService.searchUrl}?_page=${page}&_limit=${SearchService.pageSize}`;
    return this.http.get(url)
      .pipe(
        catchError((err) => {
          if (err.status === 404) {
            return of([{id: '-1'}]);
          }

          return of(null);
        })
      );
  }
}

