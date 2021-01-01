import { IAction } from 'types/data.types';
import { IGetAllPostsReducer } from 'types/reducer.types';
import {
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILURE,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  CHANGE_POST_STATUS_START,
  CHANGE_POST_STATUS_SUCCESS,
  CHANGE_POST_STATUS_FAILURE,
  GET_ALL_POSTS_ADMIN_START,
  GET_ALL_POSTS_ADMIN_SUCCESS,
  GET_ALL_POSTS_ADMIN_FAILURE,
} from './listPosts.constants';

const INITIAL_STATE = {
  getAllPostsSuccessStatus: false,
  getAllPostsError: '',
  getAllPosts: {},
  getAllPostsAdminSuccessStatus: false,
  getAllPostsAdminError: '',
  getAllPostsAdmin: {},
  postDeleteStatus: false,
  postDeleteResponse: '',
  postDeleteError: '',
  postAddStatus: false,
  postAddResponse: '',
  postAddError: '',
  postChangeStatus: false,
  postChangeResponse: '',
  postChangeError: '',
};

export default function getAllPosts(state = INITIAL_STATE, { type, payload }: IAction) {
  switch (type) {
    case GET_ALL_POSTS_START:
      return setGetAllPostsStart(state);

    case GET_ALL_POSTS_SUCCESS:
      return setGetAllPostsSuccess(state, payload);

    case GET_ALL_POSTS_FAILURE:
      return setGetAllPostsError(state, payload);

    case GET_ALL_POSTS_ADMIN_START:
      return setGetAllPostsAdminStart(state);

    case GET_ALL_POSTS_ADMIN_SUCCESS:
      return setGetAllPostsAdminSuccess(state, payload);

    case GET_ALL_POSTS_ADMIN_FAILURE:
      return setGetAllPostsAdminError(state, payload);

    case ADD_POST_START:
      return setAddPostStart(state);

    case ADD_POST_SUCCESS:
      return setAddPostSuccess(state, payload);

    case ADD_POST_FAILURE:
      return setAddPostError(state, payload);

    case CHANGE_POST_STATUS_START:
      return setChangePostStart(state);

    case CHANGE_POST_STATUS_SUCCESS:
      return setChangePostSuccess(state, payload);

    case CHANGE_POST_STATUS_FAILURE:
      return setChangePostError(state, payload);

    case DELETE_POST_START:
      return setDeletePostStart(state);

    case DELETE_POST_SUCCESS:
      return setDeletePostSuccess(state, payload);

    case DELETE_POST_FAILURE:
      return setDeletePostError(state, payload);

    default:
      return state;
  }
}

// List post
const setGetAllPostsStart = (state: IGetAllPostsReducer) => ({
  ...state,
  postDeleteStatus: false,
  postAddStatus: false,
});

const setGetAllPostsSuccess = (state: IGetAllPostsReducer, payload: Object) => ({
  ...state,
  getAllPostsSuccessStatus: true,
  getAllPostsError: '',
  getAllPosts: payload,
});

const setGetAllPostsError = (state: IGetAllPostsReducer, payload: Object) => ({
  ...state,
  getAllPostsSuccessStatus: false,
  getAllPostsError: payload,
  getAllPosts: {},
});

// Get all posts admin
const setGetAllPostsAdminStart = (state: IGetAllPostsReducer) => ({
  ...state,
  postDeleteStatus: false,
  postAddStatus: false,
});

const setGetAllPostsAdminSuccess = (state: IGetAllPostsReducer, payload: Object) => ({
  ...state,
  getAllPostsAdminSuccessStatus: true,
  getAllPostsAdminError: '',
  getAllPostsAdmin: payload,
});

const setGetAllPostsAdminError = (state: IGetAllPostsReducer, payload: Object) => ({
  ...state,
  getAllPostsAdminSuccessStatus: false,
  getAllPostsAdminError: payload,
  getAllPostsAdmin: '',
});

// Add post
const setChangePostStart = (state: IGetAllPostsReducer) => ({
  ...state,
  postChangeStatus: false,
});

const setChangePostSuccess = (state: IGetAllPostsReducer, payload: Object) => ({
  ...state,
  postChangeStatus: true,
  postChangeResponse: payload,
  postChangeError: '',
});

const setChangePostError = (state: IGetAllPostsReducer, payload: Object) => ({
  ...state,
  postChangeStatus: false,
  postChangeResponse: '',
  postChangeError: payload,
});

// Change post status
const setAddPostStart = (state: IGetAllPostsReducer) => ({
  ...state,
  getAllPostsSuccessStatus: false,
  getAllPostsAdminSuccessStatus: false,
});

const setAddPostSuccess = (state: IGetAllPostsReducer, payload: Object) => ({
  ...state,
  postAddStatus: true,
  postAddResponse: payload,
  postAddError: '',
});

const setAddPostError = (state: IGetAllPostsReducer, payload: Object) => ({
  ...state,
  postAddStatus: false,
  postAddResponse: '',
  postAddError: payload,
});

// Delete post
const setDeletePostStart = (state: IGetAllPostsReducer) => ({
  ...state,
});

const setDeletePostSuccess = (state: IGetAllPostsReducer, payload: Object) => ({
  ...state,
  postDeleteStatus: true,
  postDeleteResponse: payload,
  postDeleteError: '',
});

const setDeletePostError = (state: IGetAllPostsReducer, payload: Object) => ({
  ...state,
  postDeleteStatus: false,
  postDeleteResponse: '',
  postDeleteError: payload,
});
