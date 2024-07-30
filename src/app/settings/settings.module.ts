import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/shared/libs/shared.module';
import { SettingsComponent } from './settings.component';
import { CompaniesPriceListsComponent } from './companies-price-lists/companies-price-lists.component';
import { CouponsComponent } from './coupons/coupons.component';
import { DistributersComponent } from './distributers/distributers.component';
import { OffersComponent } from './offers/offers.component';
import { SellersComponent } from './sellers/sellers.component';
import { VisitResultsComponent } from './visit-results/visit-results.component';
import { VisitTypesComponent } from './visit-types/visit-types.component';

@NgModule({
  declarations: [
    SettingsComponent,
    CompaniesPriceListsComponent,
    CouponsComponent,
    DistributersComponent,
    OffersComponent,
    SellersComponent,
    VisitResultsComponent,
    VisitTypesComponent,
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
