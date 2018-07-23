import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/observable';
import { Person } from '../../../../Models/person';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private url = 'https://swapi.co/api/people/';

  constructor(private http: Http) { }

  getPage(count: number): any {
    return this.http
    .get(this.url + '?page=' + count)
    .map((res: Response) => res.json());
  }

  get(urlType: string): any {
    return this.http
    .get(urlType)
    .map((res: Response) => res.json());
  }
}
