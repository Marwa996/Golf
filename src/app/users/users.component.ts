import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
})
export class UsersComponent {
  links = [
    { name: "المراقب العام", route: 'supervisor' },

    { name: 'مديرين التسويق', route: 'marketing-managers' },
    { name: "مديرين خدمة العملاء", route: 'customer-service-managers' },

    { name: 'مناديب التسويق', route: 'marketing-representatives' },
    {
      name: 'مناديب خدمة العملاء',
      route: 'customer-service-representative',
    },
    { name: 'مستخدمين النظام', route: 'system-users' },
  ];
  activeLink = this.links[0].route;

  toggle(route: string) {
    this.activeLink = route;
  }
}
