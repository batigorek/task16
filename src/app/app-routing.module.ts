import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { WorkersModule } from './workers/workers.module';


const routes: Routes = [
  {
    path: '',
    component: InformationComponent
  },
  {
    path: 'workers',
    loadChildren: () => 
    import('./workers/workers.module').then(m => WorkersModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
