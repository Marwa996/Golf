import { Component } from "@angular/core";

@Component({
    selector:'app-main-page',
    templateUrl: 'main-page.component.html',
    styleUrls:['main-page.component.scss']
})
export class MainPageComponent{
    items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
}