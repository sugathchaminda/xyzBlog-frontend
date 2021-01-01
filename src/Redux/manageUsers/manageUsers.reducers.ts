import { IAction } from 'types/data.types';
import { IGetAllUsersReducer } from 'types/reducer.types';
import {
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
} from './manageUsers.constants';

const INITIAL_STATE = {
  getAllUsersStatus: false,
  getAllUsersError: '',
  getAllUsers: {},
};

export default function manageUsers(state = INITIAL_STATE, { type, payload }: IAction) {
  switch (type) {
    case GET_ALL_USERS_START:
      return setAllUsersStart(state);

    case GET_ALL_USERS_SUCCESS:
      return setAllUsersSuccess(state, payload);

    case GET_ALL_USERS_FAILURE:
      return setAllUsersError(state, payload);

    default:
      return state;
  }
}

// List users
const setAllUsersStart = (state: IGetAllUsersReducer) => ({
  ...state,
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
