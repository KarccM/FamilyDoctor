import {LoadingButton} from '@mui/lab'
import {Modal, Stack} from '@mui/material'
import React from 'react'
import {styled} from '@mui/material/styles'

const StyledStack = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '90%',
  height: '85%',
}))

const Header = styled('header')(({theme}) => ({
  fontSize: '32px',
}))

//---------------------------------------------------------------
interface Props {
    confirmation:boolean,
    isLoading:boolean,
    closeConfirmation:()=>void,
    onSave:()=>void,
}

const ConfirmationModal : React.FC<Props> = ({
  confirmation,
  closeConfirmation,
  onSave,
  isLoading,
}) => {
  return (
    <>
    <Modal
        open={confirmation}
        handleClose={closeConfirmation}
    >
        <Header>
        هل انت متأكد من القيام بالعملية
        </Header>
        انت لن تستطيع عكس العملية
        <StyledStack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            sx={{my: 2}}
        >
        <LoadingButton
          onClick={closeConfirmation}
          size="large"
          variant="contained"
          sx={{mr: 2}}
        >
            إلغاء
        </LoadingButton>
        <LoadingButton
            size="large"
            type="button"
            variant="contained"
            onClick={onSave}
            loading={isLoading}
        >
            تأكيد
        </LoadingButton>
        </StyledStack>
    </Modal>

    </>
  )
}
export default ConfirmationModal
