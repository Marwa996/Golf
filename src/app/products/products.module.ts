import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
