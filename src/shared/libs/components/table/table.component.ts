import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TableDefinition } from '../../models';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'golf-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
})
export class GolfTableComponent<T> implements OnInit, AfterViewInit {
  @Input() data: T[] = [];
  @Input() columns: TableDefinition<T>[] = [];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.displayedColumns = this.columns.map((c) => c.columnDef);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
