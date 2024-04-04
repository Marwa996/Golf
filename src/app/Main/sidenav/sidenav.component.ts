import { Component, HostBinding, OnInit, computed, signal } from "@angular/core";
import { FormControl } from "@angular/forms";
import { OverlayContainer } from '@angular/cdk/overlay'
@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    @HostBinding('class') className = ''
    darkClass = 'theme-dark';
    lightClass = 'theme-light'
    switchTheme = new FormControl(false)

    constructor(private overlay: OverlayContainer) { }

    menuItems = signal<MenuItem[]>([
        {
            icon: 'dashboard',
            label: 'Main',
            route: 'main',
            categories: ['products', 'prices']

        },
        {
            icon: 'add_shopping_cart',
            label: 'Products',
            route: 'products',
            categories: ['users', 'clients']
        },
        {
            icon: 'people',
            label: 'Users',
            route: 'users',
            categories: ['complaints', 'requests']
        },
        {
            icon: 'input',
            label: 'Login',
            route: 'login',
            
        },
    ])

    collapsed = signal(false);
    opened = signal(false);

    sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px')

    profilePicSize = computed(() => this.collapsed() ? '32' : '100')
    
    ngOnInit(): void {
        this.switchTheme.valueChanges.subscribe((currentMode) => {
            this.className = currentMode ? this.darkClass : this.lightClass

            if (currentMode) {
                this.overlay.getContainerElement().classList.add(this.darkClass)
            } else {
                this.overlay.getContainerElement().classList.remove(this.lightClass)
            }
        })
    }
}

export type MenuItem = {
    icon: string;
    label: string;
    route?: string;
    index?: string;
    categories?: string[]
}