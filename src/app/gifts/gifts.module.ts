import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/shared/libs/shared.module';
import { GiftsComponent } from './gifts.component';
import { ReportsComponent } from './reports/reports.component';
import { GiftsPageComponent } from './gifts/gifts.component';

@NgModule({
  declarations: [GiftsComponent, ReportsComponent, GiftsPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    MatTabsModule,
    SharedModule,
  ],
  exports: [],
})
export class GiftsModule {}
