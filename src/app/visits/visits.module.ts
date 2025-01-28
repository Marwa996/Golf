import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/shared/libs/shared.module';
import { VisitsComponent } from './visits.component';
import { SellersComponent } from './sellers/sellers.component';
import { DistributerComponent } from './distributer/distributer.component';

@NgModule({
  declarations: [VisitsComponent, DistributerComponent, SellersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    MatTabsModule,
    SharedModule,
  ],
  exports: [],
})
export class VisitsModule {}
