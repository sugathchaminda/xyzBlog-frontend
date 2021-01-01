import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import { useHistory } from 'react-router-dom';
import api from 'api/client';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import IconDashboard from '@material-ui/icons/Dashboard';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';

const AppMenu: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const userRole = api.getUserRole();

  const [subMenuVisibility, setSubMenuVisibility] = useState({
    reportSubMenu: false,
    operationSubMenu: false,
  });

  function handleClick(subMenuType) {
    const newSubMenuVisibility = { ...subMenuVisibility, [subMenuType]: !subMenuVisibility[subMenuType] };

    setSubMenuVisibility(newSubMenuVisibility);
  }
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
      <ListItem button onClick={() => handleClick('reportSubMenu')} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        {subMenuVisibility.reportSubMenu ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={subMenuVisibility.reportSubMenu} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="User" />
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="IAG" />
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="Visits" />
          </ListItem>
        </List>
      </Collapse>
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
