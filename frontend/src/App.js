import React from 'react';
import { Rightbar } from './components/Rightbar/Rightbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Feed } from './components/Feed/Feed';
import { Grid } from '@mui/material';
import useStyles from './style'

function App() {

  const classes = useStyles()

    return (
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs className={classes.Sidebar}>
          <Sidebar />
        </Grid>
        <Grid item xs className={classes.Feed}>
          <Feed />
        </Grid>
        <Grid item xs className={classes.Rightbar}>
          <Rightbar />
        </Grid>
      </Grid>
    );
}

export default App;
