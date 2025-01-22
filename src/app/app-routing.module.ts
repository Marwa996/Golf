import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { ClientsListsComponent } from './clients-lists/clients-lists.component';
import { AreasComponent } from './areas/areas.component';
import { GiftsComponent } from './gifts/gifts.component';
import { ReportsComponent } from './reports/reports.component';
import { RequestsComponent } from './requests/requests.component';
import { VisitsComponent } from './visits/visits.component';
import { SettingsComponent } from './settings/settings.component';
import { BillsComponent } from './bills/bills.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'clients-lists',
    component: ClientsListsComponent,
  },
  {
    path: 'areas',
    component: AreasComponent,
  },
  {
    path: 'gifts',
    component: GiftsComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
  {
    path: 'requests',
    component: RequestsComponent,
  },
  {
    path: 'bills',
    component: BillsComponent,
  },
  {
    path: 'visits',
    component: VisitsComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
