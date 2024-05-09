import { Stack, Typography } from '@mui/material';

const Message = () => {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      sx={{ marginBottom: '10px' }}
    >
      <Typography
        variant='h6'
        sx={{ color: '#777', fontSize: { xs: '1.2rem', sm: '1.6rem' } }}
      >
        No More Jobs Available for This Category at the Moment
      </Typography>
      <Typography
        variant='body1'
        sx={{ color: '#888', fontSize: { xs: '1rem', sm: '1.2rem' } }}
      >
        Try adjusting your filters or check back later.
      </Typography>
    </Stack>
  );
};

export default Message;
