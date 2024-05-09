import { Box, CircularProgress, Container, Stack } from '@mui/material';
import Filters from './components/Filters';
import JobList from './components/JobList';
import useFetchJobs from './hooks/useFetchJobs';
import useFilterJobs from './hooks/useFilterJobs';
import useInfiniteScroll from './hooks/useInfiniteScroll';

const App = () => {
  const { jobs, hasMore, fetchJobs } = useFetchJobs();

  const { loaderRef } = useInfiniteScroll(fetchJobs);

  const { filteredJobs, selectedFilters, handleFilterChange, resetFilters } =
    useFilterJobs(jobs);

  return (
    <Container maxWidth='1280px'>
      <Box>
        <Filters
          selectedFilters={selectedFilters}
          handleFilterChange={handleFilterChange}
          resetFilters={resetFilters}
        />

        <JobList jobs={filteredJobs} />

        {hasMore && (
          <Stack
            ref={loaderRef}
            justifyContent='center'
            alignItems='center'
            sx={{ padding: '14px', marginBottom: '10px' }}
          >
            <CircularProgress />
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default App;
