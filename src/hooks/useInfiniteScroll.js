import { useEffect, useRef } from 'react';

const useInfiniteScroll = (fetchJobs) => {
  const loaderRef = useRef();

  const observerCb = (entries) => {
    const target = entries[0];

    if (target.isIntersecting) {
      fetchJobs();
    }
  };

  useEffect(() => {
    const ref = loaderRef.current;

    const observer = new IntersectionObserver(observerCb, { threshold: 1 });

    ref && observer.observe(ref);

    return () => {
      ref && observer.unobserve(ref);
    };
  }, [fetchJobs]);

  return { loaderRef };
};

export default useInfiniteScroll;
