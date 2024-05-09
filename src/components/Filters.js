import React from 'react';
import { Button, Stack, Box } from '@mui/material';
import Select from 'react-select';
import {
  experienceOptions,
  minBasePayOptions,
  remoteOptions,
  roleOptions,
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

const Filters = ({ handleFilterChange, selectedFilters }) => {
  const { experience, location, minBasePay, remote, roles, companyName } =
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

  const handleLocationFilter = (value) => {
    handleFilterChange('location', value);
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
          options={experienceOptions}
          isMulti={false}
          placeholder='Experience'
          styles={customStyles}
          isClearable={true}
          value={experience}
          onChange={handleExperienceFilter}
        />

        <Select
          options={remoteOptions}
          isMulti={false}
          placeholder='Remote/On-site'
          styles={customStyles}
          isClearable={true}
          value={remote}
          onChange={handleRemoteFilter}
        />

        <Select
          options={roleOptions}
          isMulti={true}
          placeholder='Roles'
          styles={customStyles}
          isClearable={true}
          value={roles}
          onChange={handleRolesFilter}
        />
        <Select
          options={minBasePayOptions}
          isMulti={false}
          placeholder='Min Base Pay'
          styles={customStyles}
          isClearable={true}
          value={minBasePay}
          onChange={handleMinBasePayFilter}
        />
        <TextInput
          placeholder='Search company name'
          value={companyName}
          onChange={handleCompanyNameFilter}
        />
        <TextInput
          placeholder='Search location'
          value={location}
          onChange={handleLocationFilter}
        />

        <Button
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
