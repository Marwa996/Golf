import { Component } from '@angular/core';
import { Product } from 'src/shared/libs/models';
import { ProductService } from 'src/shared/libs/services/product/product.service';
import { UserService } from 'src/shared/libs/services/user/user.service';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.scss'],
})
export class ProductsComponent {
  links = [
    { name: 'Products', route: 'products' },
    { name: 'Prices', route: 'price-list' },
    { name: 'Categories', route: 'categories' },
  ];
  activeLink = this.links[0].route;
  products!: Product[];

  productsDisplayedColumns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (product: Product) => `${product.name}`,
    },
    {
      columnDef: 'category',
      header: 'Category Name',
      cell: (product: Product) => `${product.category}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (product: Product) => `${product.status}`,
    },
    {
      columnDef: 'createdBy',
      header: 'Created By',
      cell: (product: Product) => `${product.createdBy}`,
    },
    {
      columnDef: 'createdAt',
      header: 'Created At',
      cell: (product: Product) => `${product.createdAt}`,
    },
  ];

  constructor(private productService: ProductService) {
    this.getProducts();
  }
  ngOnInit() {}
  getProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
    console.log(this.products);
  }

  toggle(route: string) {
    this.activeLink = route;
  }
}
