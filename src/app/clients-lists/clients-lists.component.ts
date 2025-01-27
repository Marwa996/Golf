import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients-lists.component.html',
  styleUrls: ['./clients-lists.component.scss'],
})
export class ClientsListsComponent {
  links = [
    { name: 'الموزعين', route: 'distributer' },

    { name: 'التجار', route: 'sellers' },
    { name: 'الفنيين', route: 'technicians' },

    { name: 'العملاء', route: 'clients' },
  ];
  activeLink = this.links[0].route;

  toggle(route: string) {
    this.activeLink = route;
  }
}
