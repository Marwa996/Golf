import { Component } from '@angular/core';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss'],
})
export class VisitsComponent {
  links = [
    { name: 'زيارات التجار', route: 'sellers' },
    { name: 'زيارات الموزعين', route: 'distributer' },
  ];
  activeLink = this.links[0].route;

  toggle(route: string) {
    this.activeLink = route;
  }
}
