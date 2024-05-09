import { Stack, Typography } from '@mui/material';

const Message = () => {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      sx={{ marginBottom: '10px' }}
    >
      <Typography variant='h6' sx={{ color: '#777' }}>
        No More Jobs Available for This Category at the Moment
      </Typography>
      <Typography variant='body1' sx={{ color: '#888' }}>
        Try adjusting your filters or check back later.
      </Typography>
    </Stack>
  );
};

export default Message;
