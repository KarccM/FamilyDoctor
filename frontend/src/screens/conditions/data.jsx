import React from "react";
import { MenuItem, Stack, styled } from "@mui/material";
import Iconify from "../../components/Iconify";
import { useMutation, useQueryClient } from "react-query";
import { deleteRequest } from "../../api/axios";

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
        cell: ({ row }) => <>{row.original.values?.join(", ")}</>
    },
    {
        header: "نوع الاجابات",
        accessorKey: "conditionValuesType",
        enableSorting: false,
    },
    {
        header: "نوع الشرط",
        accessorKey: "conditionType",
        enableSorting: false,
    },
    {
        header: "الاجراءات",
        accessorKey: "actions",
        cell: ({ row }) => {
            const queryClient = useQueryClient();
            const { mutate: handleRemoveClick, isLoading } = useMutation(() => deleteRequest(`conditions/${row.original._id}`), {
                onSuccess() {
                    queryClient.invalidateQueries('conditions');
                }
            });

            return (<Stack flexDirection={'row'} >
                {/* <MenuItem
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
                </MenuItem> */}

                <StyledMenuItem onClick={() => handleRemoveClick()}>
                    <Iconify
                        icon="eva:trash-2-outline"
                        width={24}
                        height={24}
                    />
                </StyledMenuItem>
            </Stack >)
        },
        enableSorting: false,
    },
];
