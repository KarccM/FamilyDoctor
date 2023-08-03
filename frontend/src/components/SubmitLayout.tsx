import {LoadingButton} from '@mui/lab';
import {Stack} from '@mui/material';
import React from 'react';


interface Props {
    cancelAction: ()=> void,
    isLoading : boolean,
    isDisabled: boolean,
    label: string
}

const SubmitLayout: React.FC<Props> = ({cancelAction,isLoading,isDisabled,label}) => {
  return (
    <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 2 }}
    >
        <LoadingButton
            onClick={cancelAction}
            size="large"
            variant="contained"
            sx={{ mr: 2 }}
        >
            إلغاء
        </LoadingButton>
        <LoadingButton
            size="large"
            type="submit"
            variant="contained"
            loading={isLoading}
            disabled={isDisabled}
        >
            {label}
        </LoadingButton>
    </Stack>
  );
}

export default SubmitLayout;
