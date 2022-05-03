import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaOpenDataComponent } from './container/bandeja-open-data/bandeja-open-data.component';

const routes: Routes = [
  { path: '', component: BandejaOpenDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpendataRoutingModule { }
