import { createSelector } from 'reselect';

const selectAllPostsStatState = (state) => state.getAllPosts;

const selectGetPostsStatus = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.getAllPostsSuccessStatus,
);

const selectGetPostsResponse = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.getAllPosts,
);

const selectGetPostsAdminStatus = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.getAllPostsAdminSuccessStatus,
);

const selectGetPostsAdminResponse = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.getAllPostsAdmin,
);

const selectGetDeletePostStatus = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.postDeleteStatus,
);

const selectGetDeletePostResponse = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.postDeleteResponse,
);

const selectGetAddPostStatus = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.postAddStatus,
);

const selectGetAddPostResponse = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.postAddResponse,
);

const selectGetChangePostStatus = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.postChangeStatus,
);

const selectGetChangePostResponse = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.postChangeResponse,
);

const selectGetPostDetailsStatus = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.postDetailsStatus,
);

const selectGetPostDetailsResponse = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.postDetailsResponse,
);

const selectGetEditPostStatus = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.editPostStatus,
);

const selectGetEditPostResponse = () => createSelector(
  selectAllPostsStatState,
  (currentState) => currentState.editPostResponse,
);

export {
  selectGetPostsStatus,
  selectGetPostsResponse,
  selectGetDeletePostStatus,
  selectGetDeletePostResponse,
  selectGetAddPostStatus,
  selectGetAddPostResponse,
  selectGetPostsAdminStatus,
  selectGetPostsAdminResponse,
  selectGetChangePostStatus,
  selectGetChangePostResponse,
  selectGetPostDetailsStatus,
  selectGetPostDetailsResponse,
  selectGetEditPostStatus,
  selectGetEditPostResponse,
};
