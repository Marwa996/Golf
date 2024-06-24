import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/shared/libs/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Golf';
  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.themeService.setItem('darkMode', 'on');
  }
}
