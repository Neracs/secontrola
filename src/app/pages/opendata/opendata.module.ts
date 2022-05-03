import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpendataRoutingModule } from './opendata-routing.module';
import { BandejaOpenDataComponent } from './container/bandeja-open-data/bandeja-open-data.component';


@NgModule({
  declarations: [
    BandejaOpenDataComponent
  ],
  imports: [
    CommonModule,
    OpendataRoutingModule
  ]
})
export class OpendataModule { }
