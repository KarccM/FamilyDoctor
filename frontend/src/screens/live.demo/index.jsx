import { Box, Card, CardActionArea, CardContent, CircularProgress, Container, Divider, LinearProgress, Modal, Paper, Stack, Typography, styled, Button, Icon } from '@mui/material';
import { useState } from "react"
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { get, post } from "../../api/axios";
import Iconify from '../../components/Iconify';
import CustomInput from '../../components/form/TextField';

const StyledStack = styled(Stack)(({ theme }) => ({
  fontSize: '32px',
  width: '100%',
  flexDirection: 'row',
  overflow: 'auto',
  gap: 20,
  margin: '20px auto',
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function LiveDemo() {
  const [conclusions, setConclusions] = useState([]);
  const [acheivedConcluion, setAcheivedConcluion] = useState([]);
  const [message, setMessage] = useState([]);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [startButton, setStartButton] = useState(true);
  const [detail, setDetail] = useState({});

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

  const { isFetching: chatLoading, refetch } = useQuery({
    queryKey: [`chats`],
    queryFn: () => get(`chats/chat/64e1fb8c4b410aa370a97036`).then((data) => {
      setAcheivedConcluion(data?.data?.context?.acheivedConcluion ?? {});
      setConclusions(data.data?.context?.goals ?? []);
      setMessage(data.data?.condition?.question);
      setStartButton(false);
    }),
    enabled: false,
  });

  const { mutate, isLoading } = useMutation(
    (data) => post(`chats/chat/64e1fb8c4b410aa370a97036`, data),
    {
      onSuccess: (data) => {
        setAcheivedConcluion(data?.data?.context?.acheivedConcluion ?? {});
        setConclusions(data.data?.context?.goals ?? []);
        !data.data?.condition?.question ?
          setMessage("لدينا نتيجة الان")
          :
          setMessage(data.data?.condition?.question)
        console.log('data :>> ', data);
        reset();
      },
      onError: (error) => {

      },
    }
  );

  const onSubmitForm = ({ message }) => {
    mutate({ user_response: message })
  };

  console.log('acheivedConcluion :>> ', acheivedConcluion);
  return <>

    <Container>
      <Typography variant="h3" sx={{ marginBottom: 1 }} >
        الدردشة
      </Typography>
      <Paper sx={{ padding: 2, marginBottom: 3 }}>
        {
          startButton ? <>
            <Button fullWidth disabled={chatLoading} onClick={() => {
              setStartButton(true);
              refetch();
            }}>
              {chatLoading ? <CircularProgress /> : <Iconify icon="material-symbols:not-started-rounded" sx={{ height: 40, width: 40 }} />}
            </Button>
          </> : <>
            <Stack>
              <Box marginBottom={2}>
                <Typography sx={{ minWidth: 200 }} >
                  السؤال : {message}
                </Typography>
              </Box>
              <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmitForm)}>
                <Stack flexDirection={'row-reverse'} gap={1}>
                  <CustomInput label='الاجابة' name={'message'} control={control} errors={errors} fullWidth />
                  <Button variant="contained" type="submit" disabled={isLoading}>
                    <Iconify icon="prime:send" />
                  </Button>
                </Stack>
              </form>
            </Stack>
            {isLoading && <LinearProgress />}
          </>
        }
      </Paper>

      <Divider />
      <Typography variant="h3" sx={{ marginTop: 3 }} >
        صف الاستنتاج
      </Typography>
      <StyledStack>
        {conclusions.map(({ conclusion, previouslyTried }) =>
          <Card sx={{ width: 345 }} variant="outlined" key={conclusion.name}
            onClick={() => {
              setDetail(conclusion)
              setOpenDetailsModal(true)
            }}
          >

            <CardActionArea>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1, color: conclusion.name == acheivedConcluion.name ? 'green' : '', }}>
                <Iconify icon="iconoir:security-pass" width={40} height={40} />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {conclusion.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  هل المرض مشخص مسبقا : {previouslyTried ? "نعم" : "لا"}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  الوزن الحالي : {Number.isNaN(conclusion?.priority + conclusion?.rules?.[0]?.ruleWeight) ? '-999' : conclusion?.priority + conclusion?.rules?.[0]?.ruleWeight}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </StyledStack>

      <Modal
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDetailsModal}
        onClick={() => { setOpenDetailsModal(false) }}
      >
        <Box sx={{ ...style }}>
          <CircularProgress color="inherit" />
        </Box>
      </Modal>
    </Container>

  </>
}