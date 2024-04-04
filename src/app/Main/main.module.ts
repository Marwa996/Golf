
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
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
    MainPageComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
    
  ],
  exports: [SidenavComponent]
})
export class MainPageModule { }
