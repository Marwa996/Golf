import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
})
export class UsersComponent {
  links = [
    { name: 'Marketing Representatives', route: 'marketing-representatives' },
    {
      name: 'Customer Service Representative',
      route: 'customer-service-representative',
    },
    { name: 'Marketing Managers', route: 'marketing-managers' },
    { name: 'System Users', route: 'system-users' },
  ];
  activeLink = this.links[0].route;

  toggle(route: string) {
    this.activeLink = route;
  }
}
