import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';
import api from 'api/client';
import IconDashboard from '@material-ui/icons/Dashboard';

const AppMenu: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const userRole = api.getUserRole();

  const onMenuClick = (route) => {
    history.push(route);
  };

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      <ListItem button className={classes.menuItem} onClick={() => onMenuClick('/list/posts')}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconDashboard />
        </ListItemIcon>
        <ListItemText primary="All Blog Posts" />
      </ListItem>
      {userRole === 'Admin' && (
        <>
          <ListItem button className={classes.menuItem} onClick={() => onMenuClick('/posts/manage')}>
            <ListItemIcon className={classes.menuItemIcon}>
              <IconDashboard />
            </ListItemIcon>
            <ListItemText primary="Manage Blog Posts" />
          </ListItem>
          <ListItem button className={classes.menuItem} onClick={() => onMenuClick('/users')}>
            <ListItemIcon className={classes.menuItemIcon}>
              <IconDashboard />
            </ListItemIcon>
            <ListItemText primary="Manage Users" />
          </ListItem>
        </>
      )}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles(() => createStyles({

  appMenu: {
    width: '100%',
  },
  navList: {
    width: drawerWidth,
  },
  menuItem: {
    width: drawerWidth,
  },
  menuItemIcon: {
    color: 'purple',
  },
}));

export default AppMenu;
