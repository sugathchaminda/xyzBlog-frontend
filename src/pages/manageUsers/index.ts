import { lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectGetUsersStatus,
  selectGetUsersResponse,
  selectGetAssignAdminRoleStatus,
  selectGetAssignAdminRoleResponse,
} from '../../Redux/manageUsers/manageUsers.selectors';
import { getAllUsersStart, assignAdminRoleStart } from '../../Redux/manageUsers/manageUsers.actions';

const LazyContainer = lazy(() => import('./container'));

const mapStateToProps = createStructuredSelector({
  getUsersStatus: selectGetUsersStatus(),
  getUsersResponse: selectGetUsersResponse(),
  getAssignAdminRoleStatus: selectGetAssignAdminRoleStatus(),
  getAssignAdminRoleResponse: selectGetAssignAdminRoleResponse(),
});

const mapDispatchToProps = (dispatch: any) => ({
  allUsersStart: () => dispatch(getAllUsersStart()),
  assignAdminRoleStartFunc: (data) => dispatch(assignAdminRoleStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LazyContainer);
