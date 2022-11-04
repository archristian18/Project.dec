import React from 'react';
import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Grid } from '@mui/material';

function App() {

    return (
      <Grid container l={12} spacing={2} sx={{backgroundColor: 'red'}}>
        <Grid item md={4} spacing={2} sx={{backgroundColor: 'green'}}>
          <Sidebar />
        </Grid>
        <Grid item md={4} spacing={2} sx={{backgroundColor: 'yellow'}}>
          <Feed />
        </Grid>
        <Grid item md={4} spacing={2} sx={{backgroundColor: 'blue'}}>
          <Rightbar />
        </Grid>
      </Grid>  
    );
}

export default App;
