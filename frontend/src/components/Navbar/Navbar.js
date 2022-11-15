import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style'
import PersonIcon from '@mui/icons-material/Person';


export const Navbar = () => {

    const classes = useStyles()

    return (
        <AppBar className={classes.AppBar}>
            <Toolbar className={classes.ToolBar}>
                <Typography className={classes.textNavBar}>Navbar</Typography>
                <PersonIcon />
            </Toolbar>
        </AppBar>
    );
}
