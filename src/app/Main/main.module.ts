import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageComponent } from './main-page/main.component';
import { LoginComponent } from './login/login/login.component';
import { MatIconModule } from '@angular/material/icon';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    MainPageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [MainPageComponent, LoginComponent]
})
export class MainPageModule { }
