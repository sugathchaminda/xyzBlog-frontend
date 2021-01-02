import { httpMethods } from 'enums';
import { Http } from 'library';
import api from 'api/client';

import * as Endpoints from 'constants/endpoints.constant';

class DashboardHttp {
  static getAllPosts = () => Http.setMethod(httpMethods.get).setUrl(Endpoints.GET_ALL_POSTS).setToken(api.getToken()).request();

  static getAllPostsAdmin = () => Http.setMethod(httpMethods.get).setUrl(Endpoints.GET_ALL_POSTS_ADMIN).setToken(api.getToken()).request();

  static deletePost = (postId) => Http.setMethod(httpMethods.delete).setUrl(`${Endpoints.DELETE_POST}/${postId}`).setToken(api.getToken()).request();

  static addPost = (payload: Object) => Http.setMethod(httpMethods.post).setUrl(Endpoints.ADD_POST).setData(payload).setToken(api.getToken())
    .request();

  static changePost = (postId, payload: Object) => Http.setMethod(httpMethods.put).setUrl(`${Endpoints.CHANGE_POST}/${postId}`)
    .setData(payload).setToken(api.getToken())
    .request();

  static editPost = (postId, payload: Object) => Http.setMethod(httpMethods.put)
    .setUrl(`${Endpoints.EDIT_POST}/${postId}`).setData(payload).setToken(api.getToken())
    .request();

  static getPostDetails = (postId) => Http.setMethod(httpMethods.get).setUrl(`${Endpoints.GET_POST_DETAILS}/${postId}`).setToken(api.getToken()).request();
}

export default DashboardHttp;
