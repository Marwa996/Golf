import { Injectable } from '@angular/core';
import { DARK_THEME_CLASS, LIGHT_THEME_CLASS, THEME_KEY, ThemeType } from '../../../data';
import { LocalStorageService } from './local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  constructor(private localStorageService: LocalStorageService){}
  setThemeMode(state: ThemeType){
    if(state === ThemeType.Light){
      document.body.classList.remove(DARK_THEME_CLASS);
      document.body.classList.add(LIGHT_THEME_CLASS)
    } else {
      document.body.classList.remove(LIGHT_THEME_CLASS);
      document.body.classList.add(DARK_THEME_CLASS)
    }
    this.localStorageService.setItem(THEME_KEY,state)
  }


}
