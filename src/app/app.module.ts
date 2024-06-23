import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './Main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './products/products.module';
import { ProductsRoutingModule } from './products/products-routing.module';
import { UsersModule } from './users/users.module';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/shared/libs/shared.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    MainPageModule,
    ProductsModule,
    UsersModule,
   ProductsRoutingModule,
   MatButtonModule
  ],
  providers: [Document],
  bootstrap: [AppComponent]
})
export class AppModule { }
