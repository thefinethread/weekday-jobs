import { useMemo, useState } from 'react';

const initialState = {
  experience: null,
  minBasePay: null,
  remote: null,
  roles: [],
  locations: [],
  companyName: '',
};

const useFilterJobs = (jobs) => {
  const [selectedFilters, setSelectedFilters] = useState(initialState);

  const { experience, locations, minBasePay, remote, roles, companyName } =
    selectedFilters;

  const handleFilterChange = (filterName, selectedOption) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterName]: selectedOption,
    });
  };

  const filteredExperience = (job) => {
    return !experience || job.minExp >= experience.value;
  };

  const filteredMinBasePay = (job) => {
    return !minBasePay || job.minJdSalary * 1000 >= minBasePay.value;
  };

  const filteredRoles = (job) => {
    return (
      !roles.length ||
      roles.some((role) =>
        role.value.toLowerCase().includes(job.jobRole.toLowerCase())
      )
    );
  };

  const filteredLocations = (job) => {
    return (
      !locations.length ||
      locations.some((location) =>
        location.value.toLowerCase().includes(job.location.toLowerCase())
      )
    );
  };

  const filteredRemote = (job) => {
    return (
      !remote ||
      (remote.value === 'remote' && job.location === 'remote') ||
      (remote.value === 'on-site' && job.location !== 'remote')
    );
  };

  const filteredCompanyName = (job) => {
    return (
      !companyName ||
      job.companyName.toLowerCase().includes(companyName.toLowerCase())
    );
  };

  const filteredJobs = useMemo(
    () =>
      jobs?.filter((job) => {
        return (
          filteredExperience(job) &&
          filteredMinBasePay(job) &&
          filteredRoles(job) &&
          filteredRemote(job) &&
          filteredLocations(job) &&
          filteredCompanyName(job)
        );
      }),
    [selectedFilters, jobs]
  );

  const resetFilters = () => {
    setSelectedFilters(initialState);
  };

  return { selectedFilters, filteredJobs, handleFilterChange, resetFilters };
};

export default useFilterJobs;
