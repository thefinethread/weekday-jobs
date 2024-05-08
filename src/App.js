import { Box, Container } from '@mui/material';
import Filters from './components/Filters';

const App = () => {
  return (
    <Container maxWidth='1280px'>
      <Box>
        <Filters />
      </Box>
    </Container>
  );
};

export default App;
