import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
})
export class UsersComponent {
  links = [
    { name: 'Marketing Representatives', route: 'marketing-representatives' },
    {
      name: 'Customer Service Representative',
      route: 'customer-service-representative',
    },
    { name: 'Marketing Managers', route: 'marketing-managers' },
    { name: 'System Users', route: 'system-users' },
  ];
  systemUsers = [
    // 'Image',
    // 'Name',
    // 'Phone Number',
    // 'National ID Number',
    // 'Status',
    // 'Created At',
    // 'Options',
    {
      columnDef: 'image',
      header: 'Image',
      // cell: (element: ELEMENT) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      // cell: (element: ELEMENT) => `${element.name}`,
    },
    {
      columnDef: 'weight',
      header: 'Phone Number',
      // cell: (element: ELEMENT) => `${element.weight}`,
    },
    {
      columnDef: 'NIDNumber',
      header: 'National ID Number',
      // cell: (element: ELEMENT) => `${element.symbol}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      // cell: (element: ELEMENT) => `${element.symbol}`,
    },
    {
      columnDef: 'createdAt',
      header: 'Created At',
      // cell: (element: ELEMENT) => `${element.symbol}`,
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

  activeLink = this.links[0].route;

  toggle(route: string) {
    this.activeLink = route;
  }
}
const ELEMENT_DATA = [
  {
    img: '1',
    name: 'Hydrogen',
    phoneNumber: 10079,
    IDDNumber: 123,
    status: 'active',
    createdAt: '20-10-2023',
  },
  {
    img: '2',
    name: 'Helium',
    phoneNumber: 40026,
    symbol: 123,
    status: 'active',
    createdAt: '20-10-2023',
  },
  {
    img: '3',
    name: 'Lithium',
    phoneNumber: 6941,
    symbol: 123,
    status: 'active',
    createdAt: '20-10-2023',
  },
  {
    img: '4',
    name: 'Beryllium',
    phoneNumber: 90122,
    symbol: 123,
    status: 'active',
    createdAt: '20-10-2023',
  },
  {
    img: '5',
    name: 'Boron',
    phoneNumber: 10811,
    symbol: 123,
    status: 'active',
    createdAt: '20-10-2023',
  },
  {
    img: '6',
    name: 'Carbon',
    phoneNumber: 120107,
    symbol: 123,
    status: 'active',
    createdAt: '20-10-2023',
  },
  {
    img: '7',
    name: 'Nitrogen',
    phoneNumber: 140067,
    symbol: 123,
    status: 'active',
    createdAt: '20-10-2023',
  },
  {
    img: '8',
    name: 'Oxygen',
    phoneNumber: 159994,
    symbol: 123,
    status: 'active',
    createdAt: '20-10-2023',
  },
  {
    img: '9',
    name: 'Fluorine',
    phoneNumber: 189984,
    symbol: 123,
    status: 'active',
    createdAt: '20-10-2023',
  },
  {
    img: '10',
    name: 'Neon',
    phoneNumber: 201797,
    symbol: 123,
    status: 'active',
    createdAt: '20-10-2023',
  },
];
