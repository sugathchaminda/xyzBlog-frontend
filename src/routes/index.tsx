import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import ListPosts from '../pages/listPosts';
import AddPost from '../pages/listPosts/addNewPost';
import Profile from '../pages/profile';
import AllPosts from '../pages/managePosts';
import AllUsers from '../pages/manageUsers';

const publicRouteMap = {
  SignIn: {
    path: '/signin',
    component: SignIn,
  },
  LandingPage: {
    path: '/',
    component: SignIn,
  },
  SignUp: {
    path: '/signup',
    component: SignUp,
  },

};

const privateRouteMap = {
  Dashboard: {
    path: '/list/posts',
    component: ListPosts,
  },
  ListPosts: {
    path: '/list/posts',
    component: ListPosts,
  },
  AddPost: {
    path: '/add/post',
    component: AddPost,
  },
  Profile: {
    path: '/profile',
    component: Profile,
  },
};

const adminRouteMap = {
  AllPosts: {
    path: '/posts/manage',
    component: AllPosts,
  },
  AllUsers: {
    path: '/users',
    component: AllUsers,
  },
};

export { publicRouteMap, privateRouteMap, adminRouteMap };
