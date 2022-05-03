import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterDashboardComponent } from './container/master-dashboard/master-dashboard.component';

const routes: Routes = [
  { path: '', component: MasterDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
