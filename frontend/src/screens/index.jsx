import { Box, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";

export default function Dashboard() {
  let options = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['عرض', '	معلومات عن المريض', 'تاريخ طبي'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
  let series = [97, 5, 5]

  return <Container>
    <Box marginBottom={5}>
      <Paper elevation={5}>
        <Typography variant="h5" padding={10} sx={{ color: "text.secondary" }}>
          لا يمكن الاستغناء عن الطبيب, تطبيق طبيب الاسرة لا يهدف إلى استبدال الطبيب بتطبيق ذكي إنما يقوم بحل المشاكل عالية التكرار و توجيه الى الطبيب المختص و تشخيص الامراض مع وصفة طبية يمكن للطبيب الاسرة وصفها
        </Typography>
      </Paper>
    </Box>

    <Paper elevation={5}>
      <Typography variant="h3" textAlign='center' marginBottom={2}>
        توزع الاعراض
      </Typography>
      <Box sx={{ width: '50%', margin: 'auto' }}>
        <ReactApexChart options={options} series={series} type="pie" width='100%' />
      </Box>
    </Paper>
  </Container>

}