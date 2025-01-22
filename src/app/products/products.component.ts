import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.scss'],
})
export class ProductsComponent {
  links = [
    { name:'الاصناف', route: 'categories' },
    { name: 'المنتجات', route: 'products' },
    { name: 'قائمة الاسعار', route: 'price-list' },
  ];
  activeLink = this.links[0].route;

  toggle(route: string) {
    this.activeLink = route;
  }
}
