import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'golf-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
})
export class GolfTableComponent<T> {
  @Input() dataSource!: T[];
  @Input() displayedColumns!: string[];

}
