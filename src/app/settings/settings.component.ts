import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  links = [
    { name: 'كوبونات', route: 'coupons' },
    { name: 'تصنيف التجار', route: 'sellers' },
    { name: 'تصنيف الموزعين', route: 'distributer' },
    { name: 'انواع الزيارات', route: 'visits-types' },
    { name: 'نتائج الزيارات', route: 'visits-results' },
    { name: 'العروض والمسابقات', route: 'offers' },
    { name: 'قوائم اسعار الشركات', route: 'companies-price-lits' },
  ];
  activeLink = this.links[0].route;

  toggle(route: string) {
    this.activeLink = route;
  }
}
