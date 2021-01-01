import { IAction } from 'types/data.types';
import { IGetProfileReducer } from 'types/reducer.types';
import { GET_PROFILE_START, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './profile.constants';

const INITIAL_STATE = {
  getProfileSuccessStatus: false,
  getProfileError: '',
  getProfile: {},
};

export default function getProfile(state = INITIAL_STATE, { type, payload }: IAction) {
  switch (type) {
    case GET_PROFILE_START:
      return setGetProfileStart(state);

    case GET_PROFILE_SUCCESS:
      return setGetProfileSuccess(state, payload);

    case GET_PROFILE_FAILURE:
      return setGetProfileError(state, payload);

    default:
      return state;
  }
}

const setGetProfileStart = (state: IGetProfileReducer) => ({
  ...state,
});

const setGetProfileSuccess = (state: IGetProfileReducer, payload: Object) => ({
  ...state,
  getProfileSuccessStatus: true,
  getProfileError: '',
  getProfile: payload,
});

const setGetProfileError = (state: IGetProfileReducer, payload: Object) => ({
  ...state,
  getProfileSuccessStatus: false,
  getProfileError: payload,
  getProfile: {},
});
