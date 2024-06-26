import React from 'react';
import { Button, Stack, Box } from '@mui/material';
import Select from 'react-select';
import {
  EXPERIENCE_OPTIONS,
  LOCATION_OPTIONS,
  MIN_BASE_PAY_OPTIONS,
  REMOTE_OPTIONS,
  ROLE_OPTIONS,
} from '../constants/constants';
import TextInput from './TextInput';

const customStyles = {
  control: (provided) => ({
    ...provided,
    fontSize: '13px',
    minHeight: '2.5rem',
    minWidth: '8rem',
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: '13px',
    minHeight: '28px',
    marginTop: '2px',
    zIndex: 10,
  }),
};

const Filters = ({ handleFilterChange, resetFilters, selectedFilters }) => {
  const { experience, locations, minBasePay, remote, roles, companyName } =
    selectedFilters;

  const handleExperienceFilter = (selectedOption) => {
    handleFilterChange('experience', selectedOption);
  };

  const handleMinBasePayFilter = (selectedOption) => {
    handleFilterChange('minBasePay', selectedOption);
  };

  const handleRemoteFilter = (selectedOption) => {
    handleFilterChange('remote', selectedOption);
  };

  const handleRolesFilter = (selectedOption) => {
    handleFilterChange('roles', selectedOption);
  };

  const handleLocationsFilter = (value) => {
    handleFilterChange('locations', value);
  };

  const handleCompanyNameFilter = (value) => {
    handleFilterChange('companyName', value);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Stack
        columnGap='20px'
        rowGap='10px'
        flexWrap='wrap'
        justifyContent='flex-start'
        direction={'row'}
      >
        <Select
          options={EXPERIENCE_OPTIONS}
          isMulti={false}
          placeholder='Experience'
          styles={customStyles}
          isClearable={true}
          value={experience}
          onChange={handleExperienceFilter}
        />

        <Select
          options={REMOTE_OPTIONS}
          isMulti={false}
          placeholder='Remote/On-site'
          styles={customStyles}
          isClearable={true}
          value={remote}
          onChange={handleRemoteFilter}
        />

        <Select
          options={ROLE_OPTIONS}
          isMulti={true}
          placeholder='Roles'
          styles={customStyles}
          isClearable={true}
          value={roles}
          onChange={handleRolesFilter}
        />
        <Select
          options={MIN_BASE_PAY_OPTIONS}
          isMulti={false}
          placeholder='Min Base Pay'
          styles={customStyles}
          isClearable={true}
          value={minBasePay}
          onChange={handleMinBasePayFilter}
        />
        <Select
          options={LOCATION_OPTIONS}
          isMulti={true}
          placeholder='Location'
          styles={customStyles}
          isClearable={true}
          value={locations}
          onChange={handleLocationsFilter}
        />
        <TextInput
          placeholder='Search company name'
          value={companyName}
          onChange={handleCompanyNameFilter}
        />

        <Button
          onClick={resetFilters}
          variant='contained'
          color='primary'
          size='medium'
          sx={{ height: '38px', textTransform: 'none' }}
        >
          Clear Filters
        </Button>
      </Stack>
    </Box>
  );
};

export default Filters;
