import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Button, TextField } from '@mui/material';

export default function Page() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h1>Websocket connection:</h1>
          <Button variant="contained">Connect</Button>
          <Button variant="contained">Disconnect</Button>
        </Grid>
        <Grid item xs={6}>
          <h1>What is your name?</h1>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button variant="contained">Send</Button>
        </Grid>
        <Grid item xs={12} id="greetings">

        </Grid>
      </Grid>
    </Box>
  );
}