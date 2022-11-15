import React, { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import SavingsIcon from '@mui/icons-material/Savings';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import {
    ListItemButton,
    List,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

function Account() {

		const [open, setOpen] = useState(false);

		const handleClick = () => {
			setOpen(!open);
		};

    return (
			<List>
				<ListItemButton onClick={handleClick}>
					<ListItemIcon>
							<AccountBalanceWalletIcon />
					</ListItemIcon>
					<ListItemText primary="Account" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>
										<SavingsIcon />
								</ListItemIcon>
								<ListItemText primary="Add Account" />
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>
										<ReceiptLongIcon />
								</ListItemIcon>
								<ListItemText primary="View Account" />
						</ListItemButton>
					</List>
				</Collapse>
			</List>
    );
}

export default Account;
