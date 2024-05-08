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

const Filters = () => {
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
        />

        <Select
          options={remoteOptions}
          isMulti={false}
          placeholder='Remote/On-site'
          styles={customStyles}
          isClearable={true}
        />

        <Select
          options={roleOptions}
          isMulti={true}
          placeholder='Roles'
          styles={customStyles}
          isClearable={true}
        />
        <Select
          options={minBasePayOptions}
          isMulti={false}
          placeholder='Min Base Pay'
          styles={customStyles}
          isClearable={true}
        />
        <TextInput placeholder='Search company name' />
        <TextInput placeholder='Search location' />

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
