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
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

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
    MatCardModule,
    MatSortModule,
    MatTableModule
  ],
  exports: []
})
export class ProductsModule { }
