import { Box, Container } from '@mui/material';
import Filters from './components/Filters';
import JobList from './components/JobList';

const App = () => {
  return (
    <Container maxWidth='1280px'>
      <Box>
        <Filters />
        <JobList />
      </Box>
    </Container>
  );
};

export default App;
