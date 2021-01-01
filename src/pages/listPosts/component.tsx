import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from 'shared/form/button';
import React from 'react';
import moment from 'moment';
import customstyles from './styles.css';

const useStyles = makeStyles(() => createStyles({
  root: {
    flexGrow: 1,
    paddingBottom: '100px',
  },
  table: {
    width: '100%',
    minWidth: '100%',
  },
  subHeaderContainer: {
    width: '437px',
    height: '53px',
  },
  dashboardHeader: {
    color: '#702C75',
    fontSize: '32px',
  },
}));

interface Props {
  allPostsResponseData: object;
  history: any;
}

const ListPost: React.FunctionComponent<Props> = ({ allPostsResponseData, history }) => {
  const classes = useStyles();

  const onAddPost = () => {
    history.push('/add/post');
  };

  const tableRows = [];
  if (allPostsResponseData != null) {
    Object.keys(allPostsResponseData).forEach((index, key) => {
      const { text, title, user: { first_name: firstName, last_name: lastName }, _id: id, created_at: createdDate } = allPostsResponseData[key];

      tableRows.push(
        <Grid
          item
          xs={12}
          container
          key={id}
        >
          <Grid
            item
            xs={12}
            container
          >
            <h3>{title}</h3>
          </Grid>
          <Grid
            item
            xs={12}
            container
            key={id}
          >
            Date:
            {' '}
            {moment(createdDate).format('MM/DD/YYYY')}
          </Grid>
          <Grid
            item
            xs={12}
            container
          >
            {text}
          </Grid>
          <Grid
            item
            xs={12}
            container
          >
            Created By
            {' '}
            {`${firstName} ${lastName}`}
          </Grid>
        </Grid>,
      );
    });
  }

  return (
    <Grid container style={customstyles} className="p1" direction="column">
      <Grid item container xs={12} justify="center" alignItems="center">
        <Grid
          item
          xs={12}
          container
          spacing={2}
        >
          <h3 className={classes.dashboardHeader}>Blog posts</h3>
        </Grid>
        <br />
        <br />
        <Grid
          item
          xs={12}
          container
          spacing={2}
        >
          <Button
            variant="contained"
            onClick={onAddPost}
            label="Add new post"
            className="primary"
            width="200px"
          />
        </Grid>

        <br />
        <br />
        <Grid
          item
          xs={12}
          container
          spacing={1}
        >
          {tableRows}
        </Grid>
      </Grid>
    </Grid>
  );
};

export const ListPostComponent = React.memo(ListPost);
