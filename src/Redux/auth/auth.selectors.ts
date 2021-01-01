import { createSelector } from 'reselect';

const selectProfileState = (state) => state.authentication;

const selectGetSignInStatus = () => createSelector(
  selectProfileState,
  (currentState) => currentState.isAuthenticated,
);

const selectGetSignInError = () => createSelector(
  selectProfileState,
  (currentState) => currentState.signInError,
);

const selectGetSignInResponse = () => createSelector(
  selectProfileState,
  (currentState) => currentState.token,
);

const selectGetSignOutStatus = () => createSelector(
  selectProfileState,
  (currentState) => currentState.userLogoutState,
);

export {
  selectGetSignInStatus,
  selectGetSignInError,
  selectGetSignInResponse,
  selectGetSignOutStatus,
};
