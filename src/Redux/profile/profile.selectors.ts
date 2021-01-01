import { createSelector } from 'reselect';

const selectProfileStatState = (state) => state.getProfile;

const selectGetProfileStatus = () => createSelector(
  selectProfileStatState,
  (currentState) => currentState.getProfileSuccessStatus,
);

const selectGetProfileResponse = () => createSelector(
  selectProfileStatState,
  (currentState) => currentState.getProfile,
);

export {
  selectGetProfileStatus,
  selectGetProfileResponse,
};
