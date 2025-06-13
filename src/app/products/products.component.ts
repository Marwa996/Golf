import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.scss'],
})
export class ProductsComponent {
  links = [
    { name: 'الاصناف', route: 'categories' },
    { name: 'المنتجات', route: 'products' },
    { name: 'قائمة الاسعار', route: 'price-list' },
  ];
  activeLink = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.activeLink = this.router.url + this.links[0];
  }

}
