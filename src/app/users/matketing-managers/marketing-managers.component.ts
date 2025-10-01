import { Component } from '@angular/core';
import { TableDefinition } from 'src/shared/data';
import { User } from 'src/shared/data/models/user.model';

@Component({
  selector: 'users-marketing-managers-page',
  templateUrl: 'marketing-managers.component.html',
  styleUrls: ['marketing-managers.component.scss'],
})
export class MarketingManagersPageComponent {
  usersColumns: TableDefinition<User>[] = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: User) => `${element.name}`,
    },
    {
      columnDef: 'phoneNumber',
      header: 'Phone Number',
      cell: (element: User) => `${element.phoneNumber}`,
    },
    {
      columnDef: 'passCode',
      header: 'Pass Code',
      cell: (element: User) => `${element.passCode}`,
    },
  ];

  // usersData: User[] = [
  //   {
  //     name: 'Sara',
  //     phoneNumber: 123456789,
  //     passCode: 123456,
  //   },
  //   {
  //     name: 'Mavin',
  //     phoneNumber: 123456789,
  //     passCode: 123456,
  //   },
  // ];
}
