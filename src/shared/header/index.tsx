import { Box, Grid, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import api from 'api/client';
import React, { useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import { signOutStart } from '../../Redux/auth/auth.actions';
import customStyles from './style.css';
import { selectGetGlobalError } from '../../Redux/global/global.selectors';
import { selectGetSignOutStatus } from '../../Redux/auth/auth.selectors';

const styles: Stylesheet = {
  headerBorder: {},
  hidden: {
    display: 'none',
  },
  visible: {
    display: 'block',
  },
};

interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  menuIconInvisible?: boolean;
  doSignOut: () => any;
  getSignOutStatus: () => any;
  history?: any;
  getGlobalError?: string;
}

function Header({ getGlobalError, doSignOut, getSignOutStatus, history }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const onClickNavigation = () => {
    setShowMenu(!showMenu);
  };

  const onLogoutClick = () => {
    doSignOut();
  };

  const onMenuClick = (route) => {
    history.push(route);
    setShowMenu(false);
  };

  useEffect(() => {
    if (getSignOutStatus) {
      window.location.reload();
    }
  }, [getSignOutStatus]);

  useEffect(() => {
    NotificationManager.error(getGlobalError);
  }, [getGlobalError]);
  const token = api.getToken();

  return (
    <Grid container direction="column" style={styles.headerBorder}>
      <Grid item>
        <div id="header" style={customStyles}>
          {token && (
            <IconButton
              color="primary"
              component="span"
              onClick={onClickNavigation}
              style={styles.visible}
            >
              <MenuIcon id="menuIcon" />
            </IconButton>
          )}
          {token && (
            <ul id="headerMenu" className={showMenu ? 'show' : ''}>
              <li>
                <div role="presentation" className="link" onClick={() => onMenuClick('/dashboard')}>
                  Dashboard
                </div>
              </li>
              <li>
                <div role="presentation" className="link" onClick={() => onMenuClick('/list/smartTags')}>
                  Smart Tag Request
                </div>
              </li>
              <li>
                <div role="presentation" className="link" onClick={onLogoutClick}>
                  Sign Out
                </div>
              </li>
            </ul>
          )}
        </div>
      </Grid>
      <Grid className="padding-tb-reg">
        <Box display="flex">
          <Box flexGrow={1} />
          <Box />
        </Box>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = createStructuredSelector({
  getGlobalError: selectGetGlobalError(),
  getSignOutStatus: selectGetSignOutStatus(),
});

const mapDispatchToProps = (dispatch: any) => ({
  doSignOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
