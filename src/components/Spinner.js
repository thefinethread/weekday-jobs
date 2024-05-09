import { CircularProgress, Stack } from '@mui/material';

const Spinner = ({ loaderRef }) => {
  return (
    <Stack
      ref={loaderRef}
      justifyContent='center'
      alignItems='center'
      sx={{ padding: '14px', marginBottom: '10px' }}
    >
      <CircularProgress />
    </Stack>
  );
};

export default Spinner;
