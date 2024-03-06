import Box from '@mui/material/Box';
import Container  from "@mui/material/Container";
import Posture   from '../../widgits/components/Posture'

function App() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Container maxWidth="sm" sx={{ py: 2 }}>
        <Posture />
      </Container>
    </Box>
  );
}

export default App;