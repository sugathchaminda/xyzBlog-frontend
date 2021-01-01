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

export {
  selectGetUsersStatus,
  selectGetUsersResponse,
};
