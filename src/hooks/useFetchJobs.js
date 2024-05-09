import { useState } from 'react';
import { SAMPLE_DATA } from '../constants/sampleJdData';
import { JOBS_PER_PAGE } from '../constants/constants';

const useFetchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchJobs = () => {
    const newJobs = SAMPLE_DATA.slice(
      (page - 1) * JOBS_PER_PAGE,
      page * JOBS_PER_PAGE
    );

    if (page * JOBS_PER_PAGE >= SAMPLE_DATA.length) {
      setHasMore(false);
      return;
    }

    setJobs((prev) => [...prev, ...newJobs]);
    setPage((prev) => prev + 1);
  };

  return {
    jobs,
    hasMore,
    fetchJobs,
  };
};

export default useFetchJobs;
