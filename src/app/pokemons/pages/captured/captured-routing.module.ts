import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CapturedComponent } from './captured.component';

const routes: Routes = [
  {
    path: '',
    component: CapturedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapturedRoutingModule {}
