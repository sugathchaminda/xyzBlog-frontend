import '../../loading.css';
import { createStyles, withStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { selectGetIsFetching, selectGetGlobalError, selectGetGlobalNotify } from '../../Redux/global/global.selectors';

const styles = createStyles({
  root: {
    backgroundColor: 'purple',
    textAlign: 'center',
    height: '100vh',
  },
  container: {
    paddingLeft: '0',
    paddingRight: '0',
    maxWidth: '550px',
    margin: '0 auto',
    display: 'inline-block',
    flexDirection: 'column',
    background: 'white',
    padding: '20px',
    marginTop: '60px',
    maxHeight: '800px',
    width: 'auto',
  },
});

interface Props {
  classes: any;
  children: JSX.Element;
  history: History;
  readonly isFetching: boolean;
  getGlobalError: string;
  getGlobalNotify: string;
}

const MainContainer: React.FC<Props & RouteComponentProps> = ({
  classes,
  children,
  history,
  isFetching,
  getGlobalError,
  getGlobalNotify,
}) => {
  const [loading, setLoading] = useState(isFetching);

  useEffect(() => {
    setLoading(isFetching);
  }, [isFetching]);

  useEffect(() => {
    NotificationManager.listNotify.map((notify) => NotificationManager.remove(notify));
    if (getGlobalError) {
      NotificationManager.error(getGlobalError);
    }
    if (getGlobalNotify) {
      NotificationManager.success(getGlobalNotify);
    }
  }, [getGlobalError, getGlobalNotify]);

  return (
    <>
      <div className={classes.root}>
        <div>
          <Box borderRadius={10} className={classes.container}>
            <div>
              {children && React.cloneElement(children, { history })}
            </div>
          </Box>
        </div>
        {loading && (
          <div>
            <div className="overlay" />
            <CircularProgress className="loading" disableShrink color="inherit" />
          </div>
        )}
      </div>
      <NotificationContainer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectGetIsFetching(),
  getGlobalError: selectGetGlobalError(),
  getGlobalNotify: selectGetGlobalNotify(),
});

// @ts-ignore
export default connect(mapStateToProps)(
  withRouter(withStyles(styles)(MainContainer)),
);
