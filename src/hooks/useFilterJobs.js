import { useState } from 'react';

const useFilterJobs = (jobs) => {
  const [selectedFilters, setSelectedFilters] = useState({
    experience: null,
    location: [],
    minBasePay: null,
    remote: null,
    roles: [],
  });
  console.log(selectedFilters);

  const handleFilterChange = (filterName, selectedOption) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterName]: selectedOption,
    });
  };

  const { experience, location, minBasePay, remote, roles } = selectedFilters;
  const filteredJobs = jobs?.filter((job) => {
    return (
      (!experience || job.minExp >= experience.value) &&
      (!minBasePay || job.minJdSalary * 1000 >= minBasePay.value) &&
      (!roles.length ||
        roles.some((role) =>
          role.value.toLowerCase().includes(job.jobRole.toLowerCase())
        )) &&
      (!location.length ||
        location.some(
          (loc) => loc.value.toLowerCase() === job.location.toLowerCase()
        )) &&
      (!remote ||
        (remote.value === 'remote' && job.location === 'remote') || // Remote filter
        (remote.value === 'on-site' && job.location !== 'remote')) // On-site filter
    );
  });

  return { selectedFilters, filteredJobs, handleFilterChange };
};

export default useFilterJobs;
