import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterOutlet } from '@angular/router';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    MainPageComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    CdkAccordionModule
  ],
  exports: [SidenavComponent]
})
export class MainPageModule { }
