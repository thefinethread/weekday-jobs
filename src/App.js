import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import Filters from './components/Filters';
import JobList from './components/JobList';
import useFetchJobs from './hooks/useFetchJobs';

const App = () => {
  const { jobs, error, loading } = useFetchJobs();

  return (
    <Container maxWidth='1280px'>
      <Box>
        <Filters />
        <JobList jobs={jobs} />
        {loading && (
          <Stack justifyContent='center' alignItems='center'>
            <CircularProgress />
          </Stack>
        )}

        <Typography textAlign={'center'} variant='body1' sx={{ color: '#666' }}>
          {error}
        </Typography>
      </Box>
    </Container>
  );
};

export default App;
