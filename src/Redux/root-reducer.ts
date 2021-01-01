import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authentication from './auth/auth.reducer';
import global from './global/global.reducer';
import getAllPosts from './listPosts/listPosts.reducers';
import getProfile from './profile/profile.reducers';
import manageUsers from './manageUsers/manageUsers.reducers';

export default (history) => combineReducers({
  router: connectRouter(history),
  authentication,
  getAllPosts,
  getProfile,
  manageUsers,
  global,
});
