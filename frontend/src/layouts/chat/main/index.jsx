import { Box, Button, Chip, Paper, Stack, Typography, styled } from "@mui/material";
import Iconify from "../../../components/Iconify";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { get, post } from "../../../api/axios";
import { useForm } from 'react-hook-form';
import CustomInput from "../../../components/form/TextField";
import { useSearchParams } from "react-router-dom";

let imgSrc = `https://r4.wallpaperflare.com/wallpaper/792/639/808/pattern-monochrome-telegram-logo-cats-hd-wallpaper-18d68d4880c0cc48c07ce18e38a244ba.jpg`

const ChatPaper = styled(Paper)(() => ({
  height: 'calc(89vh - 92px)',
  position: 'relative',
  backgroundImage: `url('${imgSrc}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  paddingTop: '20px',
}))

const SubmitLayout = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  bottom: 0,
  backgroundColor: theme.palette.background.paper,
  padding: 8
}))

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}))

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: 'fit-content',
  padding: 8,
  borderRadius: '1rem'
}))

export default function ChatLayout() {

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      message: '',
    },
  });

  const [messages, setMessages] = useState([]);
  const [searchParams, _] = useSearchParams();
  const chatId = searchParams.get('chat')
  useQuery({
    queryKey: [`chats/${chatId}`, chatId],
    queryFn: () => get(`chats/chat/${chatId}`).then((data) => {
      setMessages([{ type: 'doctor', message: <StyledChip label={data.data?.condition?.question} /> }])
    }),
    enabled: chatId !== undefined,
  });

  const { mutate, isError, isLoading } = useMutation(
    (data) => post(`chats/chat/${chatId}`, data),
    {
      onSuccess: (data) => {
        data.data?.conclusion?.name ?
          setMessages(prev => [...prev, {
            type: 'doctor', message:
              <StyledBox>
                <Typography>
                  {data.data?.conclusion?.name}
                </Typography>
                {data.data?.conclusion?.treatment.length > 0 && <Typography>
                  طريقة العلاج :
                  {data.data?.conclusion?.treatment[0]}
                </Typography>}
                {data.data?.conclusion?.notes.length > 0 && <ul>
                  ملاحظات
                  <li>{data.data?.conclusion?.notes[0]}</li>
                </ul>}
              </StyledBox>
          }])
          : data.data?.condition?.question ?
            setMessages(prev => [...prev, {
              type: 'doctor', message: <StyledChip label={data.data?.condition?.question} />
            }]) :
            setMessages(prev => [...prev, {
              type: 'doctor', message: <StyledChip label="عذرا نحن غير قادرين على مساعدتك يمكنك مراجعة طبيب اسرة حقيقي" />
            }])
        reset();
      },
      onError: (error) => {

      },
    }
  );


  const onSubmitForm = ({ message }) => {
    setMessages(prev => [...prev, { type: 'user', message }])
    mutate({ user_response: message })
  };

  return (
    <ChatPaper>
      <Stack sx={{
        height: 'calc(89vh - 123px)',
        overflow: 'auto',
        marginX: 2,
      }} >
        {messages?.map(({ message, type }, index) => {
          console.log('message :>> ', message);
          return <React.Fragment key={index}>
            {
              type === 'doctor' ?
                <Box my={2} textAlign='left'>
                  {message}
                </Box>
                :
                <Box mt={2} textAlign='right'>
                  {message}
                </Box>
            }
          </React.Fragment>
        }
        )}
      </Stack>
      <SubmitLayout>
        <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Stack flexDirection={'row-reverse'} gap={1}>
            <CustomInput label='الاجابة' name={'message'} control={control} errors={errors} fullWidth />
            <Button variant="contained" type="submit" disabled={isLoading}>
              <Iconify icon="prime:send" />
            </Button>
          </Stack>
        </form>
      </SubmitLayout>
    </ChatPaper >
  )
}