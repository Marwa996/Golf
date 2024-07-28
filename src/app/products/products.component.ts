import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.scss'],
})
export class ProductsComponent {
  links = [
    { name: $localize`Products`, route: 'products' },
    { name: $localize`Prices`, route: 'price-list' },
    { name: $localize`Categories`, route: 'categories' },
  ];
  activeLink = this.links[0].route;

  toggle(route: string) {
    this.activeLink = route;
  }
}
