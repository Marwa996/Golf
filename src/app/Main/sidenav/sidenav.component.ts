import {
  Component,
  HostBinding,
  OnInit,
  computed,
  signal,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from 'src/shared/libs/services/theme/theme.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @HostBinding('class') className = '';
  darkClass = 'theme-dark';
  lightClass = 'theme-light';
  switchTheme = new FormControl(false);

  isDarkMode: boolean = false;

  constructor(
    private overlay: OverlayContainer,
    private themeService: ThemeService
  ) {}

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: $localize`Main`,
      route: 'main',
      categories: ['products', 'prices'],
    },
    {
      icon: 'add_shopping_cart',
      label: $localize`Products`,
      route: 'products',
      categories: ['users', 'clients'],
    },
    {
      icon: 'people',
      label: $localize`Users`,
      route: 'users',
      categories: ['complaints', 'requests'],
    },
  ]);

  collapsed = signal(false);
  opened = signal(false);

  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));

  profilePicSize = computed(() => (this.collapsed() ? '32' : '100'));

  ngOnInit(): void {
    this.switchTheme.valueChanges.subscribe((currentMode) => {
      this.className = currentMode ? this.darkClass : this.lightClass;

      if (currentMode) {
        this.themeService.isDarkMode(!this.isDarkMode);
        this.overlay.getContainerElement().classList.add(this.darkClass);
      } else {
        this.themeService.isDarkMode(this.isDarkMode);
        this.overlay.getContainerElement().classList.remove(this.lightClass);
      }
    });
  }
}

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  index?: string;
  categories?: string[];
};
