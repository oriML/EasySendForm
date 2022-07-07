import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons() {
  return (
    <Stack spacing={5} direction="column" sx={{ mt: 10}}>
      <Button variant="contained" sx={{backgroundColor: '#3e1d60', m:'auto' , width: 'fit-content'}}>Clear Form</Button>
      
      <Button type="submit" variant="contained" sx={{backgroundColor: 'orange'}}>Send Form</Button>
    </Stack>
  );
}
