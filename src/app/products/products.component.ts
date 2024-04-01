import { Component } from "@angular/core";

@Component({
    selector:'app-products',
    templateUrl: 'products.component.html',
    styleUrls:['products.component.scss']
})
export class ProductsComponent{
  links = [{name:'Products', route:'products'}, {name:'Prices', route:'price-list'}, {name:'Categories', route:'categories'}];
  activeLink = this.links[0].route;

  toggle(route:string){
    this.activeLink = route;
  }
}