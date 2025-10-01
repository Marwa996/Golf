import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { tableActions, TableDefinition } from '../../data';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'golf-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
})
export class GolfTableComponent<T> implements OnInit, AfterViewInit {
  @Input({ required: true }) data!: T[];
  @Input({ required: true }) columns!: TableDefinition<T>[];
  @Input({ required: true }) tableName!: string;
  @Input({ required: false }) actions!: tableActions<T>[]
  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<T>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.displayedColumns = this.columns.map((c) => c.columnDef);
    if (this.actions) this.displayedColumns = [...this.displayedColumns, 'actions']
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
