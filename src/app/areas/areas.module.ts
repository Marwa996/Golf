import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/shared/shared.module';
import { StatesComponent } from './states/states.component';
import { CentersComponent } from './centers/centers.component';
import { AreasComponent } from './areas.component';

@NgModule({
  declarations: [StatesComponent, CentersComponent, AreasComponent],
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
export class AreasModule {}
