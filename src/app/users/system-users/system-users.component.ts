import { Component } from "@angular/core";
import { User } from "src/shared/libs/models";
import { UserService } from "src/shared/libs/services/user/user.service";

@Component({
    selector:'users-system-users-page',
    templateUrl: 'system-users.component.html',
    styleUrls:['system-users.component.scss']
})
export class SystemUsersPageComponent{
    isLoading = true;

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

      systemUsersData!: User[];

      constructor(
        private userService: UserService,
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
      }
}