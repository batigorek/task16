import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mworker, MWorkersType } from 'src/app/shared/models/mworker.model';
import { MworkerService } from 'src/app/shared/services/mworker.service';
import { Router } from '@angular/router';
import { DateService } from 'src/app/shared/services/date.service';


@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {
  @Input() title: string;
  @Input() workers: Mworker[] = [];
  @Output() deleteWorker =
    new EventEmitter<number>();
  searchStr = '';
  myWType = MWorkersType;
  constructor(
    private workService: MworkerService, private router: Router, private age: DateService
  ) { }
  ngOnInit(): void {
  }

  getAge(date: string){
    return this.age.formatDate(date);
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  onChangeName(id: number) {
    this.router.navigate([this.router.url, 'profile', id])
  }

}
