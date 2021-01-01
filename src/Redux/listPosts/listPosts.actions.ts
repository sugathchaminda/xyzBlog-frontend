import {
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILURE,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  CHANGE_POST_STATUS_START,
  CHANGE_POST_STATUS_SUCCESS,
  CHANGE_POST_STATUS_FAILURE,
  GET_ALL_POSTS_ADMIN_START,
  GET_ALL_POSTS_ADMIN_SUCCESS,
  GET_ALL_POSTS_ADMIN_FAILURE,
} from './listPosts.constants';

// Get all posts
export const getAllPostsStart = () => ({
  type: GET_ALL_POSTS_START,
});

export const getAllPostsSuccess = (payload: Object) => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload,
});

export const getAllPostsError = (payload: Object) => ({
  type: GET_ALL_POSTS_FAILURE,
  payload,
});

// Get all posts admin
export const getAllPostsAdminStart = () => ({
  type: GET_ALL_POSTS_ADMIN_START,
});

export const getAllPostsAdminSuccess = (payload: Object) => ({
  type: GET_ALL_POSTS_ADMIN_SUCCESS,
  payload,
});

export const getAllPostsAdminError = (payload: Object) => ({
  type: GET_ALL_POSTS_ADMIN_FAILURE,
  payload,
});

// Add new post
export const addPostStart = (payload: Object) => ({
  type: ADD_POST_START,
  payload,
});

export const addPostSuccess = (payload: Object) => ({
  type: ADD_POST_SUCCESS,
  payload,
});

export const addPostError = (payload: Object) => ({
  type: ADD_POST_FAILURE,
  payload,
});

// Change post status
export const changePostStatusStart = (payload: Object) => ({
  type: CHANGE_POST_STATUS_START,
  payload,
});

export const changePostStatusSuccess = (payload: Object) => ({
  type: CHANGE_POST_STATUS_SUCCESS,
  payload,
});

export const changePostStatusError = (payload: Object) => ({
  type: CHANGE_POST_STATUS_FAILURE,
  payload,
});

// Delete a post
export const deletePostStart = (payload: Object) => ({
  type: DELETE_POST_START,
  payload,
});

export const deletePostSuccess = (payload: Object) => ({
  type: DELETE_POST_SUCCESS,
  payload,
});

export const deletePostError = (payload: Object) => ({
  type: DELETE_POST_FAILURE,
  payload,
});
