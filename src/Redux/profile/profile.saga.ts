import { call, put, takeEvery } from 'redux-saga/effects';
import { getProfileSuccess } from 'Redux/profile/profile.actions';
import { setErrorRequest } from 'Redux/global/global.actions';
import { signOutSuccess } from 'Redux/auth/auth.actions';

import api from 'api/client';
import { GET_PROFILE_START } from './profile.constants';
import ProfileService from './profile.service';

function* getProfileStart() {
  try {
    const getProfileResponse = yield call(ProfileService.getProfile);

    if (getProfileResponse.status === 200) {
      yield put(getProfileSuccess(getProfileResponse.data.data));
    } else if (getProfileResponse.status === 401) {
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

export default function* profileSaga() {
  yield* [
    takeEvery(GET_PROFILE_START, getProfileStart),
  ];
}
