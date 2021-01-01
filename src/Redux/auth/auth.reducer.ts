import { IAction } from 'types/data.types';
import { IAuthReducer } from 'types/reducer.types';
import { SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE, SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './auth.constants';

const INITIAL_STATE = {
  token: null,
  isAuthenticated: false,
  signInError: null,
  userLogoutState: false,
  userLogoutError: null,
  userSignUpStatus: false,
  userSignUpError: '',
  userSignUpSuccess: '',
};

export default function authentication(state = INITIAL_STATE, { type, payload }: IAction) {
  switch (type) {
    case SIGN_IN_START:
      return setSignInStart(state);

    case SIGN_IN_SUCCESS:
      return setSignInSuccess(state, payload);

    case SIGN_IN_FAILURE:
      return setSignInError(state, payload);

    case SIGN_OUT_START:
      return setSignOutStart(state);

    case SIGN_OUT_SUCCESS:
      return setSignOutSuccess(state);

    case SIGN_OUT_FAILURE:
      return setSignOutError(state, payload);

    case SIGN_UP_START:
      return setSignUpStart(state);

    case SIGN_UP_SUCCESS:
      return setSignUpSuccess(state, payload);

    case SIGN_UP_FAILURE:
      return setSignUpError(state, payload);

    default:
      return state;
  }
}

// Sign in
const setSignInStart = (state: IAuthReducer) => ({
  ...state,
  token: null,
  isAuthenticated: false,
  signInError: null,
  userLogoutState: false,
});

const setSignInSuccess = (state: IAuthReducer, payload: Object) => ({
  ...state,
  token: payload,
  isAuthenticated: true,
  signInError: null,
});

const setSignInError = (state: IAuthReducer, payload: Object) => ({
  ...state,
  token: null,
  isAuthenticated: false,
  signInError: payload,
});

// Sign out
const setSignOutStart = (state: IAuthReducer) => ({
  ...state,
});

const setSignOutSuccess = (state: IAuthReducer) => ({
  ...state,
  userLogoutState: true,
  userLogoutError: null,
  isAuthenticated: false,
});

const setSignOutError = (state: IAuthReducer, payload: Object) => ({
  ...state,
  userLogoutState: false,
  userLogoutError: payload,
});

// Sign up
const setSignUpStart = (state: IAuthReducer) => ({
  ...state,
  token: null,
  userSignUpStatus: false,
  userSignUpError: '',
  userSignUpSuccess: '',
});

const setSignUpSuccess = (state: IAuthReducer, payload: Object) => ({
  ...state,
  userSignUpStatus: true,
  userSignUpError: '',
  userSignUpSuccess: payload,
});

const setSignUpError = (state: IAuthReducer, payload: Object) => ({
  ...state,
  userSignUpStatus: false,
  userSignUpError: payload,
  userSignUpSuccess: '',
});
