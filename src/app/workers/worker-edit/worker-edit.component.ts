import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { MworkerService } from 'src/app/shared/services/mworker.service';
import { Mworker, MWorkersType } from 'src/app/shared/models/mworker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {
  worker: Mworker;
  id: number;
  type: number;
  workerForm: FormGroup;
  name: string;
  surname: string;
  phone: string;
  patronymic: string;
  date: string;
  email: string;
  myWorkerType = MWorkersType;
  mask = ['8', '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  constructor(private activatedroute: ActivatedRoute, private mworkerService: MworkerService, private router: Router) {
    this.activatedroute.params.subscribe(params => {
      if (!isNullOrUndefined(params.id)) {
        this.id = +params.id;
      } else {
        this.id = null;
      }
    })
  }

  ngOnInit(): void {
    this.workerForm = new FormGroup({
      surname: new FormControl({ value: '', disabled: false }, [Validators.required]),
      name: new FormControl({ value: '', disabled: false }, [Validators.required]),
      patronymic: new FormControl({ value: '', disabled: false }, [Validators.required]),
      date: new FormControl({ value: '', disabled: false }, [Validators.required]),
      phone: new FormControl({ value: '', disabled: false }, [Validators.required]),
      email: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.email]),
      type: new FormControl({ value: '', disabled: false }, [Validators.required]),
    });
    this.getData();
  }

  async getData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let worker = this.mworkerService.getOneById(this.id);
        this.worker = await worker;
      } catch (err) {
        console.log(err)
      }
      this.workerForm.patchValue({
        surname: this.worker.surname,
        name: this.worker.name,
        patronymic: this.worker.patronymic,
        date: this.worker.date,
        phone: this.worker.phone,
        email: this.worker.email,
        type: this.worker.type
      })
    }
  }

  async onDeleteWorker() {
    try {
      await this.mworkerService.deleteOneById(this.id);
    } catch (err) {
      console.log(err);
    }
    this.router.navigate(['/workers']);
  }

  async  onConfirmName() {
    if (!isNullOrUndefined(this.id)) {
      try {
        await this.mworkerService.putOne(this.id, this.workerForm.value);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let res = await this.mworkerService.postOne(this.workerForm.value);
        console.log(res)
        this.router.navigate([this.router.url, res.id]);
      } catch (err) {
        console.log(err);
      }
    }
    this.router.navigate(['/workers']);
  }
}
