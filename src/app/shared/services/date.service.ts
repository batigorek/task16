import { Injectable } from '@angular/core';
import { MworkerService } from './mworker.service';
import { Mworker } from 'src/app/shared/models/mworker.model';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  worker: Mworker;
  constructor() { }

  formatDate(date: string) {
    let data = date.split('-');
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let _now = today.toLocaleDateString().split('.');
    if (_now[1] > data[1]) {
      return Number.parseInt(_now[2]) - Number.parseInt(data[0]);
    } else if ((_now[1] == data[1]) && (_now[0] >= data[2])) {
      return Number.parseInt(_now[2]) - Number.parseInt(data[0]);
    } else {
      return Number.parseInt(_now[2]) - Number.parseInt(data[0]) - 1;
    }
  }
}
