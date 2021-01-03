import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Button from 'shared/form/button';
import React from 'react';
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
  allUsersResponseData: object;
  assignAdminRole: (values: any) => void;
  updateUser: (userId: string, status: string) => void;
}

const ManageUser: React.FunctionComponent<Props> = ({ allUsersResponseData, assignAdminRole, updateUser }) => {
  const classes = useStyles();

  const tableRows = [];
  if (allUsersResponseData != null && allUsersResponseData) {
    const userData = allUsersResponseData;
    Object.keys(userData).forEach((index, key) => {
      const { role, first_name: firstName, last_name: lastName, email, status, _id: id } = userData[key];

      tableRows.push(
        <TableRow key={index}>
          <TableCell component="th" scope="row">
            {`${firstName} ${lastName}`}
          </TableCell>
          <TableCell>{email}</TableCell>
          <TableCell>{role}</TableCell>
          <TableCell>{status}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              label="Assign Admin"
              className="primary"
              style={{ width: '250px', marginRight: '10px' }}
              onClick={() => assignAdminRole(id)}
            />
            <Button
              variant="contained"
              label="Unblock"
              className="primary"
              style={{ width: '150px', marginRight: '10px' }}
              onClick={() => updateUser(id, 'Active')}
            />
            <Button
              variant="contained"
              label="Block"
              onClick={() => updateUser(id, 'Blocked')}
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
          <h3 className={classes.dashboardHeader}>Manage Users</h3>
        </Grid>
        <Grid
          item
          xs={12}
          container
        >
          {allUsersResponseData !== null && allUsersResponseData !== undefined ? (
            <Grid
              item
              xs={12}
              container
            >
              <h3 style={{ textAlign: 'center' }}>All posts</h3>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableRows}
                </TableBody>
              </Table>
            </Grid>
          ) : (<span>No users found</span>)}

        </Grid>
      </Grid>
    </Grid>
  );
};

export const ManageUserComponent = React.memo(ManageUser);
