import { Component } from "@angular/core";

@Component({
    selector:'products-price-list-page',
    templateUrl: 'price-list-page.component.html',
    styleUrls:['price-list-page.component.scss']
})
export class PriceListPageComponent{
  expandedIndex = 0;
}