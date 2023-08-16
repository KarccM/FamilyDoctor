import { Grid } from "@mui/material";
import ChatSideBar from "../layouts/chat/sidebar";
import ChatLayout from "../layouts/chat/main";

export default function Dashboard() {
  return <Grid container spacing={3}>
    <Grid item xs={9} sx={{ height: 'calc(89vh - 92px)' }}>
      <ChatLayout />
    </Grid>
    <Grid item xs={3}>
      <ChatSideBar />
    </Grid>
  </Grid>
}