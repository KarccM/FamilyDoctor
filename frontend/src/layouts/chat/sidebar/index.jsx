import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import Iconify from '../../../components/Iconify';
import { useChat } from '../../../context/ChatProvider';
import { useSearchParams } from 'react-router-dom';

export default function ChatSideBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams :>> ', searchParams.get('chat'));
  let chatService = useChat();
  function chatSelected(chat) {
    setSearchParams({ chat });
  }
  return (
    <Paper sx={{ height: 'calc(89vh - 92px)' }}>
      <Stack padding={3} gap={2}>
        <Button fullWidth variant="contained" onClick={chatService.createNewChat} >
          <Iconify icon="typcn:plus" />
          <Typography>
            إنشاء محادثة جديدة
          </Typography>
        </Button>
        <Button fullWidth variant="contained" color='error' onClick={chatService.clearAllChats} >
          <Typography>
            حذف الدردشات
          </Typography>
        </Button>
      </Stack>
      <Stack>
        {
          chatService.chats && chatService.chats.map(chat =>
            <Box key={chat}>
              <Button fullWidth variant={chat === searchParams.get('chat') ? 'contained' : 'text'} onClick={() => chatSelected(chat)}>
                {chat}
              </Button>
            </Box>
          )
        }
      </Stack>
    </Paper>
  )
}