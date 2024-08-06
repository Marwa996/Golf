import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/shared/libs/shared.module';
import { RequestsComponent } from './requests.component';
import { RequestsPageComponent } from './requests/requests.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ClosedComplaintsComponent } from './closed-complaints/closed-complaints.component';
import { ClosedRequestsComponent } from './closed-requests/closed-requests.component';

@NgModule({
  declarations: [
    RequestsComponent,
    RequestsPageComponent,
    ComplaintsComponent,
    ClosedComplaintsComponent,
    ClosedRequestsComponent,
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
export class UsersModule {}
