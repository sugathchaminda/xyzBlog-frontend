import { GET_PROFILE_START, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './profile.constants';

export const getProfileStart = () => ({
  type: GET_PROFILE_START,
});

export const getProfileSuccess = (payload: Object) => ({
  type: GET_PROFILE_SUCCESS,
  payload,
});

export const getProfileError = (payload: Object) => ({
  type: GET_PROFILE_FAILURE,
  payload,
});
