import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageComponent } from './main-page/main.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [MainPageComponent]
})
export class MainPageModule { }
