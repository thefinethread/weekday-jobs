import { Grid, Stack } from '@mui/material';
import React from 'react';
import { data } from '../constants/constants';
import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  return (
    <Stack justifyContent={'center'} padding={4} alignItems={'center'}>
      <Grid sx={{}} container spacing={4}>
        {jobs?.map((job) => (
          <Grid
            item
            key={job.jdUid}
            xs={12}
            sm={6}
            lg={3}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <JobCard {...job} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default JobList;
