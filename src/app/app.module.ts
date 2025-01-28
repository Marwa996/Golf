import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './products/products.module';
import { ProductsRoutingModule } from './products/products-routing.module';
import { UsersModule } from './users/users.module';
import { ClientsListsModule } from './clients-lists/clients.module';
import { AreasModule } from './areas/areas.module';
import { GiftsModule } from './gifts/gifts.module';
import { ReportsModule } from './reports/reports.module';
import { RequestsModule } from './requests/requests.module';
import { BillsModule } from './bills/bills.module';
import { VisitsModule } from './visits/visits.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainPageModule,
    ProductsModule,
    UsersModule,
    ClientsListsModule,
    AreasModule,
    GiftsModule,
    RequestsModule,
    ReportsModule,
    BillsModule,
    VisitsModule,
    SettingsModule,
    ProductsRoutingModule,
  ],
  providers: [Document],
  bootstrap: [AppComponent],
})
export class AppModule {}
