import {
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
} from './manageUsers.constants';

// Get all users
export const getAllUsersStart = () => ({
  type: GET_ALL_USERS_START,
});

export const getAllUsersSuccess = (payload: Object) => ({
  type: GET_ALL_USERS_SUCCESS,
  payload,
});

export const getAllUsersError = (payload: Object) => ({
  type: GET_ALL_USERS_FAILURE,
  payload,
});
