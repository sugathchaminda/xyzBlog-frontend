import { createSelector } from 'reselect';

const selectManageUsersState = (state) => state.manageUsers;

const selectGetUsersStatus = () => createSelector(
  selectManageUsersState,
  (currentState) => currentState.getAllUsersStatus,
);

const selectGetUsersResponse = () => createSelector(
  selectManageUsersState,
  (currentState) => currentState.getAllUsers,
);

const selectGetAssignAdminRoleStatus = () => createSelector(
  selectManageUsersState,
  (currentState) => currentState.assignAdminRoleStatus,
);

const selectGetAssignAdminRoleResponse = () => createSelector(
  selectManageUsersState,
  (currentState) => currentState.assignAdminRole,
);

export {
  selectGetUsersStatus,
  selectGetUsersResponse,
  selectGetAssignAdminRoleStatus,
  selectGetAssignAdminRoleResponse,
};
