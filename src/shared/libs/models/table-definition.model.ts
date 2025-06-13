export interface TableDefinition<T> {
  columnDef: string;
  header: string;
  cell: (element: T) => string;
}
export interface tableActions<T> {
  action: (item: T) => void;
  conditionToShow: (item: T) => void;
  icon?: string;
  label?: string;
}