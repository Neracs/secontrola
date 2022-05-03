import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { AboutModule} from './pages/about/about.module';
import { SearchModule } from './pages/search/search.module';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { OpendataModule } from './pages/opendata/opendata.module';
import { ContactModule } from './pages/contact/contact.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => HomeModule,
      },
      {
        path: 'about',
        loadChildren: () => AboutModule,
      },
      {
        path: 'search',
        loadChildren: () => SearchModule,
      },
      {
        path: 'dashboard',
        loadChildren: () => DashboardModule,
      },
      {
        path: 'opendata',
        loadChildren: () => OpendataModule,
      },
      {
        path: 'contact',
        loadChildren: () => ContactModule,
      }
    ]
  },
  { path: '**',
    component: AboutModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
