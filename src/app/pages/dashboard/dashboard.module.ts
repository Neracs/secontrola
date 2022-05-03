import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MasterDashboardComponent } from './container/master-dashboard/master-dashboard.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    MasterDashboardComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
