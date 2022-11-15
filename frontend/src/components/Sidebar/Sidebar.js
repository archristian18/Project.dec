import React from 'react';
import useStyles from './style'
import InboxIcon from '@mui/icons-material/Inbox';
import Customer from './Customer';
import Account from './Account';

import {
    Grid,
    ListItem,
    ListItemButton,
    List,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';

export const Sidebar = () => {

    const classes = useStyles()

    return (
			<Grid className={classes.container}>
				<List className={classes.list}>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItemButton>
					</ListItem>
				</List>
					<Divider />
					<Account />
					<Customer />
			</Grid>
    );
};
