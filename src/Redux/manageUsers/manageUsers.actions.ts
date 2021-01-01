import {
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  ASSIGN_ADMIN_ROLE_START,
  ASSIGN_ADMIN_ROLE_SUCCESS,
  ASSIGN_ADMIN_ROLE_FAILURE,
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

// Assign admin role
export const assignAdminRoleStart = (payload: Object) => ({
  type: ASSIGN_ADMIN_ROLE_START,
  payload,
});

export const assignAdminRoleSuccess = (payload: Object) => ({
  type: ASSIGN_ADMIN_ROLE_SUCCESS,
  payload,
});

export const assignAdminRoleError = (payload: Object) => ({
  type: ASSIGN_ADMIN_ROLE_FAILURE,
  payload,
});
