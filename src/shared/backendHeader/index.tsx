import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState, useRef } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logoImage from 'assets/images/xyz.jpeg';
import profileImage from 'assets/images/profile.png';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { signOutStart } from '../../Redux/auth/auth.actions';
import { selectGetSignOutStatus } from '../../Redux/auth/auth.selectors';

const useStyles = makeStyles(() => ({

  headerBorder: {},
  hidden: {
    display: 'none',
  },
  visible: {
    display: 'block',
  },
  headerImage: {
    width: '200px',
    height: 'auto',
  },
  headerMainBar: {
    alignItems: 'flex-end',
  },
  headerProfileGrid: {
    alignItems: 'flex-end',
    paddingRight: '60px',
  },
}));

interface Props {
  doSignOut: () => any;
  getSignOutStatus: boolean;
}

function BackendHeader({ doSignOut, getSignOutStatus }: Props) {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  useEffect(() => {
    if (getSignOutStatus) {
      history.push('/');
    }
  }, [getSignOutStatus]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const onLogoutClick = () => {
    doSignOut();
  };

  const onProfileClick = () => {
    history.push('/profile');
  };

  return (
    <Grid item xs={12} direction="row" container alignItems="center">
      <Grid item xs={7} container direction="column" alignItems="center" className={classes.headerMainBar}><img src={logoImage} alt="logo" className={classes.headerImage} style={{ width: '70px' }} /></Grid>
      <Grid item xs={5} container direction="column" className={classes.headerProfileGrid}>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <img src={profileImage} alt="profileImage" className={classes.headerImage} style={{ width: '40px' }} />
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={(e) => { handleClose(e); onProfileClick(); }}>Profile</MenuItem>
                    <MenuItem onClick={(e) => { handleClose(e); onLogoutClick(); }}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = createStructuredSelector({
  getSignOutStatus: selectGetSignOutStatus(),
});

const mapDispatchToProps = (dispatch: any) => ({
  doSignOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BackendHeader);
