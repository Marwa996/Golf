export interface TableDefinition<T> {
  columnDef: string;
  header: string;
  cell: (element: T) => string;
}
