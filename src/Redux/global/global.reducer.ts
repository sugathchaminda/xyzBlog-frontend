import { IAction } from 'types/data.types';
import { SET_LOADER, REMOVE_LOADER, SET_ERROR, REMOVE_ERROR, HEADER_FOOTER_VISIBILITY, MENU_VISIBILITY, SET_NOTIFY, REMOVE_NOTIFY } from './global.constants';

interface State {
  isFetching: boolean;
  error?: string;
  visibleHeaderFooter?: boolean;
  visibleMenu?: boolean;
  notifyMessage?: string;
}

const initialState: State = {
  isFetching: false,
  error: '',
  visibleHeaderFooter: true,
  visibleMenu: true,
  notifyMessage: '',
};

export default function global(state = initialState, { type, payload }: IAction) {
  switch (type) {
    case SET_LOADER:
      return {
        ...state,
        isFetching: true,
      };
    case REMOVE_LOADER:
      return {
        ...state,
        isFetching: false,
      };
    case SET_NOTIFY:
      return {
        ...state,
        notifyMessage: payload,
      };
    case REMOVE_NOTIFY:
      return {
        ...state,
        notifyMessage: '',
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: '',
      };
    case HEADER_FOOTER_VISIBILITY:
      return {
        ...state,
        visibleHeaderFooter: !state.visibleHeaderFooter,
      };
    case MENU_VISIBILITY:
      return {
        ...state,
        visibleMenu: !state.visibleMenu,
      };
    default:
      return state;
  }
}
