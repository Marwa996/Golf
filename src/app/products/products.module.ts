import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductsPageComponent } from './products/products-page.component';
import { CategoriesPageComponent } from './categories/categories-page.component';
import { PriceListPageComponent } from './price-list/price-list-page.component';
import { SharedModule } from 'src/shared/libs/shared.module';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductsPageComponent,
    CategoriesPageComponent,
    PriceListPageComponent
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
export class ProductsModule { }
