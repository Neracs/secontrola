import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPeopleComponent } from './container/search-people/search-people.component';
import { BarSearchPeopleComponent } from './components/bar-search-people/bar-search-people.component';
import { SectionResultsPeopleComponent } from './components/section-results-people/section-results-people.component';


@NgModule({
  declarations: [
    SearchPeopleComponent,
    BarSearchPeopleComponent,
    SectionResultsPeopleComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
