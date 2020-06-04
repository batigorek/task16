import { Injectable } from '@angular/core';
import { BaseHttp } from './basehttp';
import { HttpClient } from '@angular/common/http';
import { Mworker } from '../models/mworker.model';

@Injectable({
  providedIn: 'root'
})
export class MworkerService extends BaseHttp  {

  constructor(public http: HttpClient) {
    super(http, 'workers');
   }
   
  patchWorkers (data: Mworker) {
    let file = `${this.baseUrl}/${data.id}`;
    return this.http.patch(file, data).toPromise();
  }
  
}
