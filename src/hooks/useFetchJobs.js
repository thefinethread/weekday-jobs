import { useCallback, useEffect, useState } from 'react';
import { SAMPLE_DATA } from '../constants/sampleJdData';

const useFetchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);

  const fetchJobs = useCallback(() => {
    const newJobs = SAMPLE_DATA.slice((page - 1) * 10, page * 10);

    setJobs((prev) => [...prev, ...newJobs]);
    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    fetchJobs();
  }, []);

  return {
    jobs,
  };
};

export default useFetchJobs;
