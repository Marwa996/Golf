import { Component } from "@angular/core";
import { User } from "src/shared/libs/models/user.model";

@Component({
    selector:'users-marketing-managers-page',
    templateUrl: 'marketing-managers.component.html',
    styleUrls:['marketing-managers.component.scss']
})
export class MarketingManagersPageComponent{
    usersColumns: string[] = ['name', 'phoneNumber', 'passCode']

    usersData: User[] = [
        {
          name: 'Sara',
          phoneNumber: 123456789,
          passCode: 123456,
        },
        {
          name: 'Mavin',
          phoneNumber: 123456789,
          passCode: 123456,
        },
      ];
}