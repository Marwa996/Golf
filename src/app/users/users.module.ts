import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
