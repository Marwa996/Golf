import { Component } from '@angular/core';
import { GolfTableComponent } from 'src/shared/libs/components/table/table.component';
import { User } from 'src/shared/libs/models';

@Component({
  selector: 'users-marketing-representatives-page',
  templateUrl: 'marketing-representatives.component.html',
  styleUrls: ['marketing-representatives.component.scss'],
})
export class MarketingRepresentativesPageComponent {
    usersColumns: string[] = ['name', 'phoneNumber', 'passCode']
  usersData: User[] = [
    {
      name: 'John',
      phoneNumber: 123456789,
      passCode: 123456,
    },
    {
      name: 'Jane',
      phoneNumber: 123456789,
      passCode: 123456,
    },
    {
      name: 'Jack',
      phoneNumber: 123456789,
      passCode: 123456,
    },
    {
      name: 'Jill',
      phoneNumber: 123456789,
      passCode: 123456,
    },
  ];
}
