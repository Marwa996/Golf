import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/shared/libs/shared.module';
import { InactiveSellersComponent } from './inactive-sellers/inactive-sellers.component';
import { InactiveTechniciansComponent } from './inactive-technicians/inactive-technicians.component';
import { ReportsComponent } from './reports.component';
import { NewSellersComponent } from './new-sellers/new-sellers.component';
import { NewTechniciansComponent } from './new-technicians/new-technicians.component';

@NgModule({
  declarations: [
    ReportsComponent,
    InactiveSellersComponent,
    InactiveTechniciansComponent,
    NewSellersComponent,
    NewTechniciansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    MatTabsModule,
    SharedModule,
  ],
  exports: [],
})
export class ReportsModule {}
