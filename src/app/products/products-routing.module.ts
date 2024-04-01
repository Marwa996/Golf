import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products/products-page.component';
import { CategoriesPageComponent } from './categories/categories-page.component';
import { PriceListPageComponent } from './price-list/price-list-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'main'
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path:'categories',
    component: CategoriesPageComponent
  },
  {
    path:'price-list',
    component: PriceListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
