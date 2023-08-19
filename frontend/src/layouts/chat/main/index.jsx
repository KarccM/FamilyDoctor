import { Box, Button, Chip, Paper, Stack, styled } from "@mui/material";
import Iconify from "../../../components/Iconify";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { get, post } from "../../../api/axios";
import { useForm } from 'react-hook-form';
import CustomInput from "../../../components/form/TextField";
import { useSearchParams } from "react-router-dom";

let imgSrc = `https://r4.wallpaperflare.com/wallpaper/792/639/808/pattern-monochrome-telegram-logo-cats-hd-wallpaper-18d68d4880c0cc48c07ce18e38a244ba.jpg`

const ChatPaper = styled(Paper)(() => ({
  height: 'calc(89vh - 92px)', position: 'relative',
  backgroundImage: `url('${imgSrc}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
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
  console.log('chatId :>> ', chatId);
  useQuery({
    queryKey: [`chats/${chatId}`, chatId],
    queryFn: () => get(`chats/chat/${chatId}`).then((data) => {
      // console.log('data :>> ', data?.data?.condition?.question);
      setMessages(prev => [...prev, { type: 'doctor', message: data?.data?.condition?.question }])
    }),
    enabled: chatId !== undefined,
  });

  const { mutate, isError, isLoading } = useMutation(
    (data) => post(`chats/chat/${chatId}`, data),
    {
      onSuccess: () => {
        reset();
      },
      onError: (error) => {

      },
    }
  );


  const onSubmitForm = ({ message }) => {
    mutate({ user_response: message })
    setMessages(prev => [...prev, { type: 'user', message }])
  };

  return (
    <ChatPaper>
      <Box>
        {messages?.map(({ message, type }) =>
          <React.Fragment key={message}>
            {
              type === 'doctor' ?
                <Box textAlign='left'>
                  <StyledChip label={message} />
                </Box>
                :
                <Box textAlign='right'>
                  <StyledChip label={message} />
                </Box>
            }
          </React.Fragment>
        )}

      </Box>
      <SubmitLayout>
        <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Stack flexDirection={'row-reverse'} gap={1}>
            <CustomInput label='الاجابة' name={'message'} control={control} errors={errors} fullWidth />
            <Button variant="contained" type="submit">
              <Iconify icon="prime:send" />
            </Button>
          </Stack>
        </form>
      </SubmitLayout>
    </ChatPaper >
  )
}