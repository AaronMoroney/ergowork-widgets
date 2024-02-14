import Box from '@mui/material/Box';
import Container  from "@mui/material/Container";
import  Timer   from '../../features/posture/PostureWidget'

function App() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Container maxWidth="sm" sx={{ py: 2 }}>
        <Timer />
      </Container>
    </Box>
  );
}

export default App;