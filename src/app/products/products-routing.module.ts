import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products/products-page.component';
import { CategoriesPageComponent } from './categories/categories-page.component';
import { PriceListPageComponent } from './price-list/price-list-page.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'categories'
      },
      {
        path: 'categories',
        component: CategoriesPageComponent
      },
      {
        path: 'products',
        component: ProductsPageComponent
      },
      {
        path: 'price-list',
        component: PriceListPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
