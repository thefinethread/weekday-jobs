import { Box, CircularProgress, Container, Stack } from '@mui/material';
import Filters from './components/Filters';
import JobList from './components/JobList';
import useFetchJobs from './hooks/useFetchJobs';
import useFilterJobs from './hooks/useFilterJobs';
import useInfiniteScroll from './hooks/useInfiniteScroll';

const App = () => {
  const { jobs, hasMore, fetchJobs } = useFetchJobs();

  const { filteredJobs, handleFilterChange, selectedFilters } =
    useFilterJobs(jobs);

  const { loaderRef } = useInfiniteScroll(fetchJobs);

  return (
    <Container maxWidth='1280px'>
      <Box>
        <Filters
          selectedFilters={selectedFilters}
          handleFilterChange={handleFilterChange}
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
