import React from 'react';
// import { Rightbar } from './components/Rightbar/Rightbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Navbar } from './components/Navbar/Navbar';
import { Feed } from './components/Feed/Feed';
import { Grid } from '@mui/material';
import useStyles from './style'

function App() {
  
  const classes = useStyles()

    return (
      <Grid>
        <Grid className={classes.navBar}>
        <Navbar />
        </Grid>
        <Grid container className={classes.container}>
          <Grid item sx={{ display: {xs:"none", sm:"none", md:"block"}}} sm="1" md="2"  className={classes.Sidebar}>
            <Sidebar />
          </Grid>
          <Grid item xs="12" sm="12" md="10">
            <Feed />
          </Grid>
        </Grid>
      </Grid>
    );
}

export default App;
