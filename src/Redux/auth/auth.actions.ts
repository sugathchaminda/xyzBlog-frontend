import { SIGN_IN_START, SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './auth.constants';

export const signInStart = (payload: Object) => ({
  type: SIGN_IN_START,
  payload,
});

export const signInSuccess = (payload: Object) => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

export const signInError = (payload: Object) => ({
  type: SIGN_IN_FAILURE,
  payload,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signUpStart = (payload: Object) => ({
  type: SIGN_UP_START,
  payload,
});

export const signUpSuccess = (payload: Object) => ({
  type: SIGN_UP_SUCCESS,
  payload,
});

export const signUpError = (payload: Object) => ({
  type: SIGN_UP_FAILURE,
  payload,
});
