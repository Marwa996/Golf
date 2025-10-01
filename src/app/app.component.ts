import { Component, OnInit } from '@angular/core';
import { LocalStorageService, ThemeService } from '@shared/core';
import { THEME_KEY, ThemeType } from '@shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Golf';
  currentMode!: ThemeType;

  constructor(
    private themeService: ThemeService, private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.currentMode = (this.localStorageService.getItem(THEME_KEY) ?? '') as ThemeType;
    if (!this.currentMode) {
      this.localStorageService.setItem(THEME_KEY, ThemeType.Dark);
      this.currentMode = ThemeType.Dark;
    }
    this.themeService.setThemeMode(this.currentMode)
}}
