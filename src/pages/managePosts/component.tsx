import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Button from 'shared/form/button';
import React, { useState, useCallback } from 'react';
import Alert from 'shared/common/alert';
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
  deletePostData: (id: string) => void;
  changePostData: (status: string, id: string) => void;
  allPostsResponseData: object;
}

const SmartTag: React.FunctionComponent<Props> = ({ allPostsResponseData, deletePostData, changePostData }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [toDeleteId, setToDeleteId] = useState('');

  const onSuccess = useCallback(() => {
    deletePostData(toDeleteId);
    setOpen(false);
  }, [toDeleteId]);

  const onCancel = useCallback(() => {
    setOpen(false);
  }, []);

  const tableRows = [];
  if (allPostsResponseData != null && allPostsResponseData) {
    const postData = allPostsResponseData;
    Object.keys(postData).forEach((index, key) => {
      const { text, title, likes, status, _id: id } = postData[key];

      tableRows.push(
        <TableRow key={index}>
          <TableCell component="th" scope="row">
            {text}
          </TableCell>
          <TableCell>{title}</TableCell>
          <TableCell>{status}</TableCell>
          <TableCell>{likes}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              label="Approve"
              className="primary"
              style={{ width: '150px', marginRight: '10px' }}
              onClick={() => changePostData('Active', id)}
            />
            <Button
              variant="contained"
              label="Reject"
              className="primary"
              style={{ width: '150px', marginRight: '10px' }}
              onClick={() => changePostData('Rejected', id)}
            />
            <Button
              variant="contained"
              label="Delete"
              onClick={() => {
                setOpen(true);
                setToDeleteId(id);
              }}
              className="primary-red"
              style={{ width: '150px', marginRight: '10px' }}
            />
          </TableCell>
        </TableRow>,
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
          spacing={1}
          className={classes.subHeaderContainer}
        >
          <h3 className={classes.dashboardHeader}>Manage Blog Posts</h3>
        </Grid>
        <Grid
          item
          xs={12}
          container
        >
          {allPostsResponseData !== null && allPostsResponseData !== undefined ? (
            <Grid
              item
              xs={12}
              container
            >
              <h3 style={{ textAlign: 'center' }}>All posts</h3>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Text</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Likes</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableRows}
                </TableBody>
              </Table>
            </Grid>
          ) : (<span>No posts found</span>)}

        </Grid>
      </Grid>
      <Alert
        open={open}
        message="Are you sure you want to delete this post?"
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    </Grid>
  );
};

export const SmartTagComponent = React.memo(SmartTag);
