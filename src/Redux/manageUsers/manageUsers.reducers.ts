import { IAction } from 'types/data.types';
import { IGetAllUsersReducer } from 'types/reducer.types';
import {
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  ASSIGN_ADMIN_ROLE_START,
  ASSIGN_ADMIN_ROLE_SUCCESS,
  ASSIGN_ADMIN_ROLE_FAILURE,
} from './manageUsers.constants';

const INITIAL_STATE = {
  getAllUsersStatus: false,
  getAllUsersError: '',
  getAllUsers: {},
  assignAdminRoleStatus: false,
  assignAdminRoleError: '',
  assignAdminRole: {},
};

export default function manageUsers(state = INITIAL_STATE, { type, payload }: IAction) {
  switch (type) {
    case GET_ALL_USERS_START:
      return setAllUsersStart(state);

    case GET_ALL_USERS_SUCCESS:
      return setAllUsersSuccess(state, payload);

    case GET_ALL_USERS_FAILURE:
      return setAllUsersError(state, payload);

    case ASSIGN_ADMIN_ROLE_START:
      return setAdminRoleStart(state);

    case ASSIGN_ADMIN_ROLE_SUCCESS:
      return setAdminRoleSuccess(state, payload);

    case ASSIGN_ADMIN_ROLE_FAILURE:
      return setAdminRoleError(state, payload);

    default:
      return state;
  }
}

// List users
const setAllUsersStart = (state: IGetAllUsersReducer) => ({
  ...state,
  assignAdminRoleStatus: false,
});

const setAllUsersSuccess = (state: IGetAllUsersReducer, payload: Object) => ({
  ...state,
  getAllUsersStatus: true,
  getAllUsersError: '',
  getAllUsers: payload,
});

const setAllUsersError = (state: IGetAllUsersReducer, payload: Object) => ({
  ...state,
  getAllUsersStatus: false,
  getAllUsersError: payload,
  getAllUsers: {},
});

// Assign admin role
const setAdminRoleStart = (state: IGetAllUsersReducer) => ({
  ...state,
  getAllUsersStatus: false,
});

const setAdminRoleSuccess = (state: IGetAllUsersReducer, payload: Object) => ({
  ...state,
  assignAdminRoleStatus: true,
  assignAdminRoleError: '',
  assignAdminRole: payload,
});

const setAdminRoleError = (state: IGetAllUsersReducer, payload: Object) => ({
  ...state,
  assignAdminRoleStatus: false,
  assignAdminRoleError: payload,
  assignAdminRole: {},
});
