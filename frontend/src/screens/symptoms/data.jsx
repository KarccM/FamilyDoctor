import React from "react";
import { MenuItem, Stack, styled } from "@mui/material";
import Iconify from "../../components/Iconify";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.error.main,
}));

export const tableColumns = [
    {
        header: "الاسم",
        accessorKey: "name",
        enableSorting: false,
    },
    {
        header: "السؤال",
        accessorKey: "question",
        enableSorting: false,
    },
    {
        header: "الاجابات",
        accessorKey: "answers",
        enableSorting: false,
        cell: ({ row }) => <>{row.original.answers.join(", ")}</>
    },
    {
        header: "الاجراءات",
        accessorKey: "actions",
        cell: ({ row }) => (<Stack flexDirection={'row'} >
            <MenuItem
            // component={RouterLink}
            // to={`${id}`}
            // sx={{ color: "text.secondary" }}
            >
                <Iconify icon="mdi:show" width={24} height={24} />
            </MenuItem>

            <MenuItem
            // component={RouterLink}
            // to={`${id}/edit`}
            // sx={{ color: "text.secondary" }}
            >

                <Iconify icon="eva:edit-fill" width={24} height={24} />
            </MenuItem>

            <StyledMenuItem onClick={() => setOpenConfirmation(true)}>
                <Iconify
                    icon="eva:trash-2-outline"
                    width={24}
                    height={24}
                />
            </StyledMenuItem>
        </Stack >),
        enableSorting: false,
    },
];
