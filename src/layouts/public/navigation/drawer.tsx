import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NAVIGATION_LINKS } from 'src/routes';

export interface NAVIGATION_DRAWER_PROPS {
    navigationLinks?: NAVIGATION_LINKS; 
    isOpen?: boolean; 
    setIsOpen?: Function;
}

export const NavigationDrawer: React.FC<NAVIGATION_DRAWER_PROPS> = ({ navigationLinks = [], isOpen, setIsOpen }) => {

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIsOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: '50vw' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navigationLinks.map((navLinkItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              {navLinkItem.icon && <ListItemIcon>
                {navLinkItem.icon}
              </ListItemIcon>}
              <ListItemText primary={navLinkItem.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
        open={isOpen}
        onClose={toggleDrawer( false)}
        >
        {list()}
    </Drawer>
  );
};
