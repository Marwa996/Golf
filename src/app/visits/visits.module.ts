import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/shared/libs/shared.module';
import { VisitsComponent } from './visits.component';
import { DistributersComponent } from './distributers/distributers.component';
import { SellersComponent } from './sellers/sellers.component';

@NgModule({
  declarations: [VisitsComponent, DistributersComponent, SellersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    MatTabsModule,
    SharedModule,
  ],
  exports: [],
})
export class UsersModule {}
