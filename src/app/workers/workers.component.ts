import { Component, OnInit } from '@angular/core';
import { Mworker, MWorkersType } from '../shared/models/mworker.model';
import { MworkerService } from '../shared/services/mworker.service';
import { Router } from '@angular/router';
import { DateService } from '../shared/services/date.service';


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  title = 'Список cотрудников';
  workers: Mworker[] = [];
  myWorkerType = MWorkersType;
 
  searchStr = '';
  sorst = 1;
  typeSort = 2;
  constructor(
    private workService: MworkerService, private router: Router
  ) {

  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      this.workers = await this.workService.getAll();
    } catch (err) {
      console.log(err)
    }
  }

  sourt(sorst: number, typeSort: number) {
    let  age = new DateService;
    if (sorst === 1) {
      if (typeSort === 2) {
        this.workers.sort(function (a, b) {
          return a.id - b.id;
        })
      } else {
        this.workers.sort(function (a, b) {
          return b.id - a.id;
        })
      }
    } else {
      if (typeSort === 2) {
        this.workers.sort(function (a, b) {
          return age.formatDate(a.date) - age.formatDate(b.date);
        })
      } else {
        this.workers.sort(function (a, b) {
          return age.formatDate(b.date) - age.formatDate(a.date);
        })
      }
    }
  }

  getByType(type: number) {
    return this.workers.filter(worker =>
      worker.type === type);
  }

  async onDeleteWorker(id: number) {
    try {
      await this.workService.deleteOneById(id);
    } catch (err) {
      console.log(err)
    } finally {
      this.getData();
    }
  }

  onChangeName(id: number) {
    this.router.navigate([this.router.url, 'profile', id])
  }

  onAddWorker() {
    this.router.navigate([this.router.url, 'profile']);
  }


}
