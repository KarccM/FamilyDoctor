export interface TableCell{
    header: string,
    accessorKey: string
    enableSorting: boolean
}

export interface TableCellWithOverride extends TableCell{
    cell: (row: any)=>React.ReactNode
}
