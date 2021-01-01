import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllPostsSuccess, deletePostSuccess, addPostSuccess, getAllPostsAdminSuccess, changePostStatusSuccess } from 'Redux/listPosts/listPosts.actions';
import { setErrorRequest } from 'Redux/global/global.actions';
import { signOutSuccess } from 'Redux/auth/auth.actions';

import api from 'api/client';
import { GET_ALL_POSTS_START, DELETE_POST_START, ADD_POST_START, CHANGE_POST_STATUS_START, GET_ALL_POSTS_ADMIN_START } from './listPosts.constants';
import ListPostService from './listPosts.service';

function* getAllPostsStart() {
  try {
    const getAllPostsResponse = yield call(ListPostService.getAllPosts);

    if (getAllPostsResponse.status === 200) {
      yield put(getAllPostsSuccess(getAllPostsResponse.data.data));
    } else if (getAllPostsResponse.status === 401) {
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

function* getAllPostsAdminStart() {
  try {
    const getAllPostsAdminResponse = yield call(ListPostService.getAllPostsAdmin);

    if (getAllPostsAdminResponse.status === 200) {
      yield put(getAllPostsAdminSuccess(getAllPostsAdminResponse.data.data));
    } else if (getAllPostsAdminResponse.status === 401) {
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

function* deletePostStart({ payload }: any) {
  try {
    const deletePostResponse = yield call(ListPostService.deletePost, payload.postId);

    if (deletePostResponse.status === 200) {
      yield put(deletePostSuccess(deletePostResponse.data.data));
    } else if (deletePostResponse.status === 401) {
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

function* addPostStart({ payload }: any) {
  try {
    const addPostResponse = yield call(ListPostService.addPost, payload);

    if (addPostResponse.status === 201) {
      yield put(addPostSuccess(addPostResponse.data.data));
    } else if (addPostResponse.status === 401) {
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

function* changePostStart({ payload }: any) {
  try {
    const { approve_status: approveStatus, postId } = payload;
    const changePostResponse = yield call(ListPostService.changePost, postId, { approve_status: approveStatus });

    if (changePostResponse.status === 200) {
      yield put(changePostStatusSuccess(changePostResponse.data.data));
    } else if (changePostResponse.status === 401) {
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

export default function* postsSaga() {
  yield* [
    takeEvery(GET_ALL_POSTS_START, getAllPostsStart),
    takeEvery(DELETE_POST_START, deletePostStart),
    takeEvery(ADD_POST_START, addPostStart),
    takeEvery(CHANGE_POST_STATUS_START, changePostStart),
    takeEvery(GET_ALL_POSTS_ADMIN_START, getAllPostsAdminStart),
  ];
}
