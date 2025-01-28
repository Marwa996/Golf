import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent {
  links = [
    { name: 'الشكاوي', route: 'complaints' },
    { name: 'الشكاوي المغلقة', route: 'closed-complaints' },
    { name: 'الطلبات', route: 'requests' },
    { name: 'الطلبات المغلقة', route: 'closed-requests' },
  ];
  activeLink = this.links[0].route;

  toggle(route: string) {
    this.activeLink = route;
  }
}
