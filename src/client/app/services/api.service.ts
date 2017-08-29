import {Component, Injectable, OnInit, Inject} from '@angular/core';

import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ApiService {
  constructor(@Inject(Http) public http: Http) {
  }
  baseUrl(): string {
    return 'https://fantasy.premierleague.com/drf/bootstrap-static';
  }
  get(): Observable<Object> {
    console.log('GET launched!');
    return this.http.get(
      'https://cors-anywhere.herokuapp.com/' + this.baseUrl())
      .map(response => response.json());
  }
}
