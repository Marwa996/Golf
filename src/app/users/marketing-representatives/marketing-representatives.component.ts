import { Component } from '@angular/core';
import { TableDefinition, User } from 'src/shared/libs/models';

@Component({
  selector: 'users-marketing-representatives-page',
  templateUrl: 'marketing-representatives.component.html',
  styleUrls: ['marketing-representatives.component.scss'],
})
export class MarketingRepresentativesPageComponent {
  // usersColumns: TableDefinition<User>[] = [
  //   {
  //     columnDef: 'name',
  //     header: 'Name',
  //     cell: (element: User) => `${element.name}`,
  //   },
  //   {
  //     columnDef: 'phoneNumber',
  //     header: 'Phone Number',
  //     cell: (element: User) => `${element.phoneNumber}`,
  //   },
  //   {
  //     columnDef: 'passCode',
  //     header: 'Pass Code',
  //     cell: (element: User) => `${element.passCode}`,
  //   },
  // ];
  // usersData: User[] = [
  //   {
  //     name: 'John',
  //     phoneNumber: 123456789,
  //     passCode: 123456,
  //   },
  //   {
  //     name: 'Jane',
  //     phoneNumber: 123456789,
  //     passCode: 123456,
  //   },
  //   {
  //     name: 'Jack',
  //     phoneNumber: 123456789,
  //     passCode: 123456,
  //   },
  //   {
  //     name: 'Jill',
  //     phoneNumber: 123456789,
  //     passCode: 123456,
  //   },
  //   {
  //     name: 'John',
  //     phoneNumber: 123456789,
  //     passCode: 123456,
  //   },
  //   {
  //     name: 'Jane',
  //     phoneNumber: 123456789,
  //     passCode: 123456,
  //   },
  //   {
  //     name: 'Jack',
  //     phoneNumber: 123456789,
  //     passCode: 123456,
  //   },
  //   {
  //     name: 'Jill',
  //     phoneNumber: 123456789,
  //     passCode: 123456,
  //   },
  // ];
}
