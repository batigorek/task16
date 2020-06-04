import { NgModule as NgModule_1 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { SearchpipePipe } from '../shared/searchpipe.pipe';

import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersComponent } from './workers.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';


@NgModule_1({
  declarations: [WorkersComponent, WorkerListComponent, WorkerEditComponent,  SearchpipePipe],
  imports: [
    CommonModule,
    WorkersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    TextMaskModule,

  ]
})
export class WorkersModule { }
