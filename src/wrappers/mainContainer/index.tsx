import '../../loading.css';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LeftBar from '../../shared/leftBar';
import BackendHeader from '../../shared/backendHeader';
import { selectGetIsFetching, selectGetVisibleHeaderFooter, selectGetVisibleMenu } from '../../Redux/global/global.selectors';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    backgroundColor: 'purple',
    height: '100vh',
  },
  container: {
    padding: '20px',
    margin: '40px',
    backgroundColor: 'white',
    minHeight: '450px',
  },
  headerGrid: {
    height: '80px',
    borderBottom: '1px solid #ccc',
  },
  headerDivider: {
    width: '100%',
  },
}));

interface Props {
  children: JSX.Element;
  history: History;
  readonly isFetching: boolean;
  visibleHeaderFooter?: boolean;
  visibleMenu?: boolean;
}

const MainContainer: React.FC<Props & RouteComponentProps> = ({
  children,
  history,
  isFetching,
}) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(isFetching);

  useEffect(() => {
    setLoading(isFetching);
  }, [isFetching]);

  return (
    <Box borderRadius={10} className={classes.container}>
      <Grid container>
        <Grid item xs={12} className={classes.headerGrid}>
          <BackendHeader />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={2}>
              <LeftBar />
            </Grid>
            <Grid item xs={10} className="p2">
              {children && React.cloneElement(children, { history })}
            </Grid>
            {loading && (
            <div>
              <div className="overlay" />
              <CircularProgress className="loading" disableShrink color="inherit" />
            </div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectGetIsFetching(),
  visibleHeaderFooter: selectGetVisibleHeaderFooter(),
  visibleMenu: selectGetVisibleMenu(),
});

// @ts-ignore
export default connect(mapStateToProps)(
  withRouter((MainContainer)),
);
