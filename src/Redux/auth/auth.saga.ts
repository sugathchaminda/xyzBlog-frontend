import { call, put, takeEvery } from 'redux-saga/effects';
import api from 'api/client';
import { signInSuccess, signOutSuccess } from 'Redux/auth/auth.actions';
import { setErrorRequest, setNotifyRequest } from 'Redux/global/global.actions';

import { IAuth } from 'types/data.types';
import { SIGN_IN_START, SIGN_OUT_START, SIGN_UP_START } from './auth.constants';
import AuthService from './auth.service';

function* signInStart({ payload }: any) {
  try {
    const signInResponse = yield call(AuthService.signIn, payload);

    if (signInResponse.status === 201) {
      const mappedSignInResponse: IAuth = signInResponse.data.token;
      api.setToken(signInResponse.data.token);
      api.setUserRole(signInResponse.data.userRole);
      yield put(signInSuccess(mappedSignInResponse));
    } else {
      yield put(setErrorRequest(signInResponse.data.error));
    }
  } catch (ex) {
    yield put(setErrorRequest(ex.error));
  }
}

function* signUpStart({ payload }: any) {
  try {
    const signUpResponse = yield call(AuthService.signUp, payload);

    if (signUpResponse.status === 201) {
      const { data: { message } } = signUpResponse;
      yield put(setNotifyRequest(message));
    } else {
      yield put(setErrorRequest(signUpResponse.data.error));
    }
  } catch (ex) {
    yield put(setErrorRequest(ex.error));
  }
}

function* signOut() {
  try {
    api.clearToken();
    api.clearUserRole();
    yield put(signOutSuccess());

    // TODO once the logout implemented from the back end it needs to complete as in the below
    /* const signOutResponse = yield call(AuthService.signOut);
    if (signOutResponse.status === 200) {
      api.clearToken();
      yield put(signOutSuccess());
    } else {
      yield put(setErrorRequest('Internal server error'));
    }
    */
  } catch (ex) {
    yield put(setErrorRequest(ex.error));
  }
}

export default function* authSaga() {
  yield* [
    takeEvery(SIGN_IN_START, signInStart),
    takeEvery(SIGN_UP_START, signUpStart),
    takeEvery(SIGN_OUT_START, signOut),
  ];
}
