import { useState } from 'react';
import { SAMPLE_DATA } from '../constants/sampleJdData';

const useFetchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchJobs = () => {
    const newJobs = SAMPLE_DATA.slice((page - 1) * 10, page * 10);

    if (page * 10 >= SAMPLE_DATA.length) {
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
