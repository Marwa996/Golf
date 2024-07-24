import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/shared/libs/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [UsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    MatButtonModule,
    MatTabsModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  exports: [],
})
export class UsersModule {}
