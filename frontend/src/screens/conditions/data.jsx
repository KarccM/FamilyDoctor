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
        cell: ({ row }) => <>{typeof row.original.values?.[0] === 'string' ? row.original.values?.join(", ") :
            row.original.values.map((lol) => Object.entries(lol)[0][0]).join(', ')
        }</>
    },
    {
        header: "نوع الاجابات",
        accessorKey: "conditionValuesType",
        enableSorting: false,
        cell: ({ row }) => <>{row.original.conditionValuesType === 'NumericIntervalValues' ? 'قيم مجالات' : "قيم ثابتة"}</>
    },
    {
        header: "نوع الشرط",
        accessorKey: "conditionType",
        enableSorting: false,
        cell: ({ row }) => <>{row.original.conditionType === 'MedicalCondition' ? 'تاريخ طبي' :
            row.original.conditionType === 'PatientInfo' ? 'معلومات عن المريض' : 'عرض'
        }</>
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
