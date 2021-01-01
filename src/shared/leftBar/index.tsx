import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppMenu from './appMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderRight: '1px solid #ccc',
    height: '75vh',

  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function LeftBar() {
  const classes = useStyles();

  return (
    <div className={clsx('App', classes.root)}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <AppMenu />
      </Drawer>
    </div>
  );
}

export default LeftBar;
