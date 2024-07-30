import { ClientsComponent } from './clients/clients.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/shared/libs/shared.module';
import { ClientsListsComponent } from './clients-lists.component';
import { DistributerComponent } from './distributer/distributer.component';
import { SellersComponent } from './sellers/sellers.component';
import { TechniciansComponent } from './technicians/technicians.component';

@NgModule({
  declarations: [
    ClientsListsComponent,
    ClientsComponent,
    DistributerComponent,
    SellersComponent,
    TechniciansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    MatButtonModule,
    MatTabsModule,
    SharedModule,
  ],
  exports: [],
})
export class UsersModule {}
