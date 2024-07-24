import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../../shared/libs/shared.module';

@NgModule({
  declarations: [ProductsComponent],
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
export class ProductsModule {}
