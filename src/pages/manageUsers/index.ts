import { lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectGetUsersStatus,
  selectGetUsersResponse,
  selectGetAssignAdminRoleStatus,
  selectGetAssignAdminRoleResponse,
  selectGetUpdateUserStatus,
  selectGetUpdateUserResponse,
} from '../../Redux/manageUsers/manageUsers.selectors';
import { getAllUsersStart, assignAdminRoleStart, updateUserStart } from '../../Redux/manageUsers/manageUsers.actions';

const LazyContainer = lazy(() => import('./container'));

const mapStateToProps = createStructuredSelector({
  getUsersStatus: selectGetUsersStatus(),
  getUsersResponse: selectGetUsersResponse(),
  getAssignAdminRoleStatus: selectGetAssignAdminRoleStatus(),
  getAssignAdminRoleResponse: selectGetAssignAdminRoleResponse(),
  getUpdateUserStatus: selectGetUpdateUserStatus(),
  getUpdateUserResponse: selectGetUpdateUserResponse(),
});

const mapDispatchToProps = (dispatch: any) => ({
  allUsersStart: () => dispatch(getAllUsersStart()),
  assignAdminRoleStartFunc: (data) => dispatch(assignAdminRoleStart(data)),
  updateUserStartFunc: (data) => dispatch(updateUserStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LazyContainer);
