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
import useFilterJobs from './hooks/useFilterJobs';

const App = () => {
  const { jobs, error, loading } = useFetchJobs();

  const { filteredJobs, handleFilterChange, selectedFilters } =
    useFilterJobs(jobs);

  return (
    <Container maxWidth='1280px'>
      <Box>
        <Filters
          selectedFilters={selectedFilters}
          handleFilterChange={handleFilterChange}
        />

        <JobList jobs={filteredJobs} />

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
