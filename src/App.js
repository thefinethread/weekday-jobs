import { Box, Container } from '@mui/material';
import Filters from './components/Filters';
import JobList from './components/JobList';
import useFetchJobs from './hooks/useFetchJobs';
import useFilterJobs from './hooks/useFilterJobs';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import Message from './components/Message';
import Spinner from './components/Spinner';

const App = () => {
  const { jobs, hasMore, loading, fetchJobs } = useFetchJobs();

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

        {hasMore && loading && <Spinner loaderRef={loaderRef} />}

        {!loading && <Message />}
      </Box>
    </Container>
  );
};

export default App;
