import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPeopleComponent } from './container/search-people/search-people.component';
import { SectionResultsPeopleComponent } from './components/section-results-people/section-results-people.component';
const routes: Routes = [
  { path: '', component: SearchPeopleComponent },
  { path: ':dni', component: SectionResultsPeopleComponent},
  { path: '**', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
