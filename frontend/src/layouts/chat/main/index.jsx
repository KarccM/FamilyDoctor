import { Box, Button, Chip, Paper, Stack, TextField, styled } from "@mui/material";
import Iconify from "../../../components/Iconify";

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
  return (
    <ChatPaper>
      <Box>
        <Box textAlign='left'>
          <StyledChip label="مرحبا! انا اشعر بالدوار" />
        </Box>

        <Box textAlign='right'>
          <StyledChip label="اهلا هل تملك حرارة ؟" />
        </Box>
      </Box>
      <SubmitLayout>
        <form>
          <Stack flexDirection={'row-reverse'} gap={1}>
            <TextField fullWidth />
            <Button variant="contained" type="submit">
              <Iconify icon="prime:send" />
            </Button>
          </Stack>
        </form>
      </SubmitLayout>
    </ChatPaper >
  )
}