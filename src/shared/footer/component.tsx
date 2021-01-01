import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import React from 'react';
import customstyles from './style.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  poweredBy: {
    marginTop: '0.5rem',
    fontSize: '0.75rem',
    fontFamily: 'Lato, Helvetica',
  },
});

const styles: Stylesheet = {
  footerGrid: {
    // textAlign: "center",
    // marginTop: "1.5rem",
    // marginBottom: "1.5rem",
  },
};

interface FooterI {
  print?: boolean;
}

const FooterComponent: React.FunctionComponent<FooterI> = () => {
  const classes = useStyles();
  return (
    <div id="footer" style={customstyles} className={classes.root}>
      <Grid container justify="center" alignItems="flex-start">
        <Grid xs={12} item className={customstyles} style={styles.footerGrid} />
      </Grid>
    </div>
  );
};

export default FooterComponent;
