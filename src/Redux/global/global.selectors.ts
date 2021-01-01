import { createSelector } from 'reselect';

const selectGlobalState = (state) => state.global;

const selectGetIsFetching = () => createSelector(
  selectGlobalState,
  (currentState) => currentState.isFetching,
);

const selectGetVisibleHeaderFooter = () => createSelector(
  selectGlobalState,
  (currentState) => currentState.visibleHeaderFooter,
);

const selectGetVisibleMenu = () => createSelector(
  selectGlobalState,
  (currentState) => currentState.visibleMenu,
);

const selectGetGlobalError = () => createSelector(
  selectGlobalState,
  (currentState) => currentState.error,
);

const selectGetGlobalNotify = () => createSelector(
  selectGlobalState,
  (currentState) => currentState.notifyMessage,
);

export {
  selectGetIsFetching,
  selectGetVisibleHeaderFooter,
  selectGetVisibleMenu,
  selectGetGlobalError,
  selectGetGlobalNotify,
};
