import {
  AfterViewInit,
  Component,
  OnInit,
  computed,
  signal,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalStorageService, ThemeService } from '@shared/core'
import { THEME_KEY, ThemeType } from '@shared/data';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, AfterViewInit {
  switchTheme = new FormControl(false);

  constructor(
    private themeService: ThemeService,
    private localStorageService: LocalStorageService
  ) {}

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: `الرئيسية`,
      route: 'main',
      // categories: ['products', 'prices'],
    },
    {
      icon: 'add_shopping_cart',
      label: `المنتجات`,
      route: 'products',
      // categories: ['users', 'clients'],
    },
    {
      icon: 'people',
      label: `المستخدمين`,
      route: 'users',
      // categories: ['complaints', 'requests'],
    },
    {
      icon: 'people',
      label: `قائمة العملاء`,
      route: 'clients-lists',
      // categories: ['complaints', 'requests'],
    },
    {
      icon: 'location_on',
      label: `المناطق`,
      route: 'areas',
      // categories: ['complaints', 'requests'],
    },
    {
      icon: 'card_giftcard',
      label: `الهدايا`,
      route: 'gifts',
      // categories: ['complaints', 'requests'],
    },
    {
      icon: 'report',
      label: `الشكاوي والطلبات`,
      route: 'requests',
      // categories: ['complaints', 'requests'],
    },
    {
      icon: 'move_to_inbox',
      label: `التقارير`,
      route: 'reports',
      // categories: ['complaints', 'requests'],
    },
    {
      icon: 'file_copy',
      label: `الفواتير`,
      route: 'bills',
      // categories: ['complaints', 'requests'],
    },
    {
      icon: 'directions_walk',
      label: `الزيارات`,
      route: 'visits',
      // categories: ['complaints', 'requests'],
    },
    {
      icon: 'settings',
      label: `الاعدادات`,
      route: 'settings',
      // categories: ['complaints', 'requests'],
    },
  ]);

  collapsed = signal(false);
  opened = signal(false);

  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));

  profilePicSize = computed(() => (this.collapsed() ? '32' : '100'));

  ngOnInit(): void {
    this.switchTheme.valueChanges.subscribe((currentMode) => {
      if (currentMode) {
        this.themeService.setThemeMode(ThemeType.Dark);
      } else {
        this.themeService.setThemeMode(ThemeType.Light);
      }
    });
  }
  ngAfterViewInit(): void {
    const themeType = this.localStorageService.getItem(THEME_KEY);
    if (themeType === ThemeType.Light) this.switchTheme.setValue(false);
    if (themeType === ThemeType.Dark) this.switchTheme.setValue(true);
  }
}

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  index?: string;
  categories?: string[];
};
