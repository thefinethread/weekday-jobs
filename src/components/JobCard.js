import React from 'react';
import { Box, Stack, Typography, Avatar, Button } from '@mui/material';

const calcSalary = (minSalary, maxSalary) => {
  const formattedMinSalary = minSalary ? `$${minSalary}k` : '';
  const formattedMaxSalary = maxSalary
    ? minSalary
      ? `${maxSalary}k`
      : `$${maxSalary}k`
    : '';
  const connector = minSalary && maxSalary ? ' - ' : '';

  return `${formattedMinSalary}${connector}${formattedMaxSalary} ✅` || 'N/A';
};

const JobCard = ({
  companyName,
  logoUrl,
  jobRole,
  location,
  minExp,
  maxExp,
  minJdSalary,
  maxJdSalary,
  salaryCurrencyCode,
  aboutCompany,
  jobDetailsFromCompany,
  founderRecruiterProfiles,
  aboutRole,
}) => {
  return (
    <Box
      sx={{
        p: 2,
        border: 1,
        borderColor: 'divider',
        borderRadius: 5,
        boxShadow: '0 0 5px rgba(0,0,0,0.2)',
        width: '300px',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': { transform: 'scale(1.02)' },
      }}
    >
      <Box
        sx={{
          boxShadow: '0 0 2px rgba(0,0,0,0.2)',
          width: 'fit-content',
          padding: '2px 8px',
          borderRadius: '12px',
          marginBottom: '16px',
        }}
      >
        <Stack direction='row' spacing={2} alignItems='center'>
          <Typography sx={{ fontSize: '10px' }} variant='caption'>
            ⏳ Posted 19 days ago
          </Typography>
        </Stack>
      </Box>
      <Stack direction='row' spacing={2} alignItems='start'>
        <Avatar alt={companyName} src={logoUrl} />
        <Stack>
          <Typography sx={{ color: '#777' }} variant='body1'>
            {companyName}
          </Typography>
          <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
            {jobRole}
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
              marginTop: '4px',
              textTransform: 'capitalize',
            }}
            variant='body2'
          >
            {location}
          </Typography>
        </Stack>
      </Stack>
      <Typography sx={{ color: '#555', marginBlock: '8px' }} variant='body2'>
        Estimated Salary: {calcSalary(minJdSalary, maxJdSalary)}
      </Typography>

      <Stack
        sx={{
          maxHeight: '250px',
          overflowY: 'hidden',
        }}
        spacing={2}
        mt={2}
        position='relative' // Position relative for pseudo-element
      >
        <Typography sx={{ fontSize: '16px' }} variant='h6'>
          About Company:
        </Typography>
        <Typography sx={{ fontSize: '13px' }} variant='body1'>
          {jobDetailsFromCompany}
        </Typography>
        <Box
          sx={{
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '200px',
            fontSize: '13px',
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
          }}
        />

        <Typography
          sx={{
            position: 'absolute',
            bottom: -6,
            textAlign: 'center',
            left: 0,
            right: 0,
            fontSize: '14px',
            color: 'rgba(0,0,255,0.8)',
            cursor: 'pointer',
          }}
        >
          View More
        </Typography>
      </Stack>

      <Box sx={{ marginBlock: '20px' }}>
        <Typography variant='body1' sx={{ color: 'rgba(0,0,0,0.6)' }}>
          Minimum Experience
        </Typography>
        <Typography variant='body2'>{minExp || 0} years</Typography>
      </Box>
      <Button
        variant='contained'
        sx={{
          width: '100%',
          height: '40px',
          textTransform: 'inherit',
          letterSpacing: 1,
        }}
      >
        ⚡ Easy Apply
      </Button>
    </Box>
  );
};

export default JobCard;
