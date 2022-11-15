import React, { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import GroupsIcon from '@mui/icons-material/Groups';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';

import {
    ListItemButton,
    List,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

function Customer() {

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

    return (
			<List>
				<ListItemButton onClick={handleClick}>
					<ListItemIcon>
						<GroupsIcon />
					</ListItemIcon>
					<ListItemText primary="Customer" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 4 }}>
									<ListItemIcon>
										<PhonelinkRingIcon />
									</ListItemIcon>
									<ListItemText primary="Load" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 4 }}>
									<ListItemIcon>
										<PersonAddIcon />
									</ListItemIcon>
									<ListItemText primary="Create Customer Account" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 4 }}>
									<ListItemIcon>
										<ListAltIcon />
									</ListItemIcon>
									<ListItemText primary="View Customer" />
							</ListItemButton>
					</List>
				</Collapse>
			</List>
    );
}

export default Customer;
