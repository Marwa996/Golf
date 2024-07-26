import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { UsersComponent } from './users.component';
import { SystemUsersPageComponent } from './system-users/system-users.component';
import { MarketingManagersPageComponent } from './matketing-managers/marketing-managers.component';
import { CustomerServiceRepresentativesComponent } from './customer-service-representatives/customer-service-representatives.component';
import { MarketingRepresentativesPageComponent } from './marketing-representatives/marketing-representatives.component';
import { SharedModule } from 'src/shared/libs/shared.module';
@NgModule({
  declarations: [
    UsersComponent,
    SystemUsersPageComponent,
    MarketingManagersPageComponent,
    CustomerServiceRepresentativesComponent,
    MarketingRepresentativesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    MatButtonModule,
    MatTabsModule,
    SharedModule,
  ],
  exports: []
})
export class UsersModule { }
