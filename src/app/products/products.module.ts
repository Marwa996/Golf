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
//start Data Tables
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
//End Data Tables
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
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: []
})
export class ProductsModule { }
