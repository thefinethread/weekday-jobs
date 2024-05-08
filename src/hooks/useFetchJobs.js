import { useCallback, useEffect, useState } from 'react';
import { API_URL } from '../constants/constants';

const useFetchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [error, setError] = useState('');

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const body = JSON.stringify({ limit: 10, offset });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body,
  };

  const fetchJobs = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    const res = await fetch(API_URL, requestOptions);

    if (res.ok) {
      const { jdList, totalCount } = await res.json();

      setJobs((prev) => [...prev, ...jdList]);

      // if (offset >= totalCount - 10) {
      //   setHasMore(false);
      // }
      setOffset((prev) => prev + 10);
    } else {
      setError('Something went wrong while fetching jobs!');
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    fetchJobs();
  }, []);

  return {
    jobs,
    error,
    loading,
  };
};

export default useFetchJobs;
