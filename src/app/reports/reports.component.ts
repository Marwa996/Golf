import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  links = [
    { name: 'تقرير الفنيين الجدد', route: 'new-technicians' },
    { name: 'تقرير الفنيين المتوقفين', route: 'inactive-technicians' },
    { name: 'تقرير التجار الجدد', route: 'new-sellers' },
    { name: 'تقرير التجار المتوقين', route: 'inactive-sellers' },
  ];
  activeLink = this.links[0].route;

  toggle(route: string) {
    this.activeLink = route;
  }
}
