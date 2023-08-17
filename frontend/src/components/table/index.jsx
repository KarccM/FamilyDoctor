import React from "react";

import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Button, Typography, Divider, CircularProgress, Backdrop } from '@mui/material';
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import { styled } from "@mui/material/styles";
import { Link as RouterLink } from 'react-router-dom';

const RootStyle = styled(Toolbar)(({ theme }) => ({
    height: 96,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 3),
}))

const SimpleBarStyle = styled(Card)(({ theme }) => ({
    maxHeight: "100%",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
        height: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#707070",
        borderRadius: "6px",
        padding: "1px",
        visibility: "hidden",
    },
    "&:hover": {
        "&::-webkit-scrollbar-thumb": {
            visibility: "visible",
        },
    },
}));

const RootTable = styled(Table)(() => ({}));

function StatisticsTable({
    tableData,
    columns,
    isLoading,
    listPermission,
    title,
}) {
    const defaultData = React.useMemo(() => [], []);
    const [{ pageIndex, pageSize }, _] = React.useState({
        pageIndex: 0,
        pageSize: 5,
    });

    const table = useReactTable({
        data: tableData,
        columns,
        pageCount: tableData?.meta?.pages ?? 1,
        state: {
            pagination: { pageIndex, pageSize },
        },
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        debugTable: true,
    });

    if (isLoading) return <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
    >
        <CircularProgress color="inherit" />
    </Backdrop>
    return (
        <SimpleBarStyle sx={{ overflowX: "auto" }}>
            {/* <RootStyle>
                <Typography variant="h4">
                    {title}
                </Typography>
                <Button
                    variant='outlined'
                    component={RouterLink}
                    to="/add"
                >
                    إنشاء عنصر جديد
                </Button>
            </RootStyle> */}
            <Divider />
            <TableContainer sx={{ minWidth: 800 }}>
                <RootTable>
                    <TableHead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableCell key={header.id}>
                                        <div style={{ alignItems: "center", display: "flex", }}>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </div>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody>
                        {table.getRowModel().rows.map((row) => {
                            return (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <TableCell sx={cell.column?.style ? cell.column?.style : null} align="left" key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </RootTable>
            </TableContainer>
        </SimpleBarStyle>
    );
}

export default StatisticsTable;
