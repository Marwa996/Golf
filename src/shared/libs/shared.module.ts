import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GolfTableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    GolfTableComponent
  ],
  imports:[
    BrowserModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [GolfTableComponent]
})
export class SharedModule { }
