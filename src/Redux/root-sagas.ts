import { all } from 'redux-saga/effects';
import authSaga from 'Redux/auth/auth.saga';
import postsSaga from 'Redux/listPosts/listPosts.saga';
import profileSaga from 'Redux/profile/profile.saga';
import manageUserSaga from 'Redux/manageUsers/manageUsers.saga';

export default function* rootSaga() {
  yield all([authSaga(), postsSaga(), profileSaga(), manageUserSaga()]);
}
