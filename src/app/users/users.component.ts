import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from 'src/shared/libs/models';
import { UserService } from 'src/shared/libs/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
})
export class UsersComponent {
  isLoading = true;
  links = [
    { name: 'Marketing Representatives', route: 'marketing-representatives' },
    {
      name: 'Customer Service Representative',
      route: 'customer-service-representative',
    },
    { name: 'Marketing Managers', route: 'marketing-managers' },
    { name: 'System Users', route: 'system-users' },
  ];
  systemUsersDisplayedColumns = [
    {
      columnDef: 'image',
      header: 'Image',
      cell: (user: User) => `${user.image}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (user: User) => `${user.name}`,
    },
    {
      columnDef: 'phoneNumber',
      header: 'Phone Number',
      cell: (user: User) => `${user.phoneNumber}`,
    },
    {
      columnDef: 'passCode',
      header: 'Pass Code',
      cell: (user: User) => `${user.passCode}`,
    },
    {
      columnDef: 'NIDNumber',
      header: 'National ID Number',
      cell: (user: User) => `${user.NIDNumber}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (user: User) => `${user.status}`,
    },
    {
      columnDef: 'createdAt',
      header: 'Created At',
      cell: (user: User) => `${user.createdAt}`,
    },
  ];
  marketingManagers = [
    'Image',
    'Name',
    'Phone Number',
    'National ID Number',
    'Status',
    'Created At',
    'Options',
  ];

  customerService = [
    'Image',
    'Name',
    'Phone Number',
    'National ID Number',
    'Status',
    'Created At',
    'Options',
  ];
  marketingRepresentatives = [
    'Image',
    'Name',
    'Phone Number',
    'National ID Number',
    'Status',
    'Created At',
    'Options',
  ];

  systemUsersData!: User[];
  activeLink = this.links[0].route;
  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getSystemUsers();
    // setTimeout(() => (this.flag = true));
  }

  getSystemUsers() {
    this.userService.getSystemUsers().subscribe({
      next: (data) => {
        this.systemUsersData = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching system users:', error);
      },
    });
    this.cdr.detectChanges();
  }

  toggle(route: string) {
    this.activeLink = route;
  }
}
