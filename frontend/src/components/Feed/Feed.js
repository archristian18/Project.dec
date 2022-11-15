// import { Table } from '@material-ui/core';
// import TabList from '@mui/lab/TabList';
import React from 'react';
import useStyles from './style'
// import {
//     Table,
//     TableHead,
//     TableContainer,
//     TableRow,
//   } from '@material-ui/core'

export const Feed = () => {
    
    const classes = useStyles()

    return (
        // <TableContainer>
        //     <Table>
        //         <TableHead>
        //             <TableRow>
        
        //             </TableRow>
        //         </TableHead>
        //     </Table>
        // </TableContainer>        
        // <Table>
        //     <TabList>asdsad</TabList>
            <div className={classes.container}>Feed</div>
        // </Table>
    );
}
