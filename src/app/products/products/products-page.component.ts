import { Component } from '@angular/core';
import { Product } from 'src/shared/data/models';
import { ProductService } from 'src/shared/services/product/product.service';

@Component({
  selector: 'products-products-page',
  templateUrl: 'products-page.component.html',
  styleUrls: ['products-page.component.scss'],
})
export class ProductsPageComponent {
  isLoading = true;
  products!: Product[];
  productsDisplayedColumns = {
    data: [
      {
        columnDef: 'name',
        header: 'اسم المنتج',
        cell: (product: Product) => `${product.name}`,
        editAction: (product: Product) => product,
      },
      {
        columnDef: 'category',
        header: 'اسم الصنف',
        cell: (product: Product) => `${product.category}`,
      },
      {
        columnDef: 'status',
        header: 'الحالة',
        cell: (product: Product) => `${product.status}`,
      },
      {
        columnDef: 'createdBy',
        header: 'تم بواسطة',
        cell: (product: Product) => `${product.createdBy}`,
      },
      {
        columnDef: 'createdAt',
        header: 'تاريخ الانشاء',
        cell: (product: Product) => `${product.createdAt}`,
      },
    ],
    actions: [
      {
        action: (product: Product) => this.edit(product),
        conditionToShow: (product: Product) => { return true },
        icon: 'edit'
      },
      {
        action: (product: Product) => { return null },
        conditionToShow: (product: Product) => { return false },
        icon: 'delete'
      },
    ],
  };

  constructor(private productService: ProductService) {
    this.getProducts();
  }
  edit(product: Product) {
    //
  }
  getProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.isLoading = false;
    });
  }
}
