import { Component, computed, signal } from "@angular/core";

@Component({
    selector:'app-sidenav',
    templateUrl:'./sidenav.component.html',
    styleUrls:['./sidenav.component.scss']
})
export class SidenavComponent {

    menuItems = signal<MenuItem[]>([
        {
            icon:'dashboard',
            label: 'Main',
            route: 'main'
        },
        {
            icon:'add_shopping_cart',
            label: 'Products',
            route: 'products'
        },
        {
            icon:'people',
            label: 'Users',
            route: 'users'
        },
    ])

    collapsed= signal(false);

    sidenavWidth = computed(()=> this.collapsed()? '65px' : '250px')
    
    profilePicSize = computed(()=> this.collapsed()? '32' : '100')

}

export type MenuItem ={
    icon:string;
    label:string;
    route?:string;
    index?:string
}