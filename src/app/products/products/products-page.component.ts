import { Component } from "@angular/core";
import { Product } from "src/shared/libs/models/product.model";
import { ProductService } from "src/shared/libs/services/product/product.service";

@Component({
    selector:'products-products-page',
    templateUrl: 'products-page.component.html',
    styleUrls:['products-page.component.scss']
})
export class ProductsPageComponent{
    isLoading = true;
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

      getProducts() {
        this.productService.getProducts().subscribe((data: Product[]) => {
          this.products = data;
          this.isLoading= false
        });
        console.log(this.products);
      }
}