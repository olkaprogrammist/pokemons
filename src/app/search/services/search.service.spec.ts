import {
  of,
  throwError,
} from 'rxjs';
import { SearchResult } from '../models/search-result';
import { SearchService } from './search.service';


describe('SearchResService', () => {
  let service: SearchService;
  let mockHttp;
  const searchResult: SearchResult = {
    id: '1',
    name: '1'
  };

  beforeEach(() => {
    mockHttp = {
      get: jasmine.createSpy('http.get'),
      post: jasmine.createSpy('http.post'),
    };

    service = new SearchService(mockHttp);
  });

  const mockSearchResults = [searchResult];

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return response', (done) => {
    mockHttp.get.and.returnValue(of(mockSearchResults));
    service.getSearchResults({searchText: '1'}).subscribe((response) => {
      expect(response).toEqual([searchResult]);
      done();
    });
  });

  it('should return empty response if 404 error', (done) => {
    mockHttp.get.and.returnValue(throwError({status: 404}));
    service.getSearchResults({searchText: 'text'}).subscribe((response) => {
      expect(response).toEqual({data: []});
      done();
    });
  });

  it('should return card info', (done) => {
    mockHttp.get.and.returnValue(of({id: '1', name: '1'}));
    service.getCardById('1').subscribe((response) => {
      expect(response).toEqual({id: '1', name: '1'});
      done();
    });
  });

  it('should return -1 if 404', (done) => {
    mockHttp.get.and.returnValue(throwError({status: 404}));
    service.getCardById('').subscribe((response) => {
      expect(response).toEqual({id: '-1'});
      done();
    });
  });

  it('should return current page', (done) => {
    mockHttp.get.and.returnValue(of(mockSearchResults));
    service.getCurrentPage(1).subscribe((response) => {
      expect(response).toEqual([{id: '1', name: '1'}]);
      done();
    });
  });

  it('should return null if not 404', (done) => {
    mockHttp.get.and.returnValue(throwError({status: 403}));
    service.getCurrentPage(2).subscribe((response) => {
      expect(response).toEqual(null);
      done();
    });
  });

  it('should return -1 if 404', (done) => {
    mockHttp.get.and.returnValue(throwError({status: 404}));
    service.getCurrentPage(2).subscribe((response) => {
      expect(response).toEqual([{id: '-1'}]);
      done();
    });
  });
});
