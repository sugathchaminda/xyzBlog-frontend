import { SET_LOADER, REMOVE_LOADER, SET_ERROR, REMOVE_ERROR, HEADER_FOOTER_VISIBILITY, MENU_VISIBILITY, SET_NOTIFY } from './global.constants';

export const setLoaderRequest = () => ({
  type: SET_LOADER,
});

export const removeLoaderRequest = () => ({
  type: REMOVE_LOADER,
});

export const setErrorRequest = (payload: Object) => ({
  type: SET_ERROR,
  payload,
});

export const setNotifyRequest = (payload: Object) => ({
  type: SET_NOTIFY,
  payload,
});

export const removeErrorRequest = () => ({
  type: REMOVE_ERROR,
});

export const setHeaderFooterVisibility = () => ({
  type: HEADER_FOOTER_VISIBILITY,
});

export const setMenuVisibility = () => ({
  type: MENU_VISIBILITY,
});
