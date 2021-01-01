import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllUsersSuccess } from 'Redux/manageUsers/manageUsers.actions';
import { setErrorRequest } from 'Redux/global/global.actions';
import { signOutSuccess } from 'Redux/auth/auth.actions';

import api from 'api/client';
import { GET_ALL_USERS_START } from './manageUsers.constants';
import ManageUsersService from './manageUsers.service';

function* getAllUsersStart() {
  try {
    const getAllUsersResponse = yield call(ManageUsersService.getAllUsers);
    if (getAllUsersResponse.status === 200) {
      yield put(getAllUsersSuccess(getAllUsersResponse.data.data));
    } else if (getAllUsersResponse.status === 401) {
      api.clearToken();
      yield put(setErrorRequest('Invalid or missing authentication token'));
      yield put(signOutSuccess());
    } else {
      yield put(setErrorRequest('Internal server error'));
    }
  } catch (ex) {
    yield put(setErrorRequest(ex.error));
  }
}

export default function* manageUserSaga() {
  yield* [
    takeEvery(GET_ALL_USERS_START, getAllUsersStart),
  ];
}
