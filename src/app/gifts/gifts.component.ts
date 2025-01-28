import { Component } from '@angular/core';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss'],
})
export class GiftsComponent {
  links = [
    { name: 'الهدايا', route: 'gifts' },
    { name: 'تقارير الهدايا', route: 'reports' },
  ];
  activeLink = this.links[0].route;

  toggle(route: string) {
    this.activeLink = route;
  }
}
