import { httpMethods } from 'enums';
import { Http } from 'library';
import api from 'api/client';

import * as Endpoints from 'constants/endpoints.constant';

class AuthHttp {
  static signIn = (payload: Object) => Http.setMethod(httpMethods.post).setUrl(Endpoints.SIGN_IN).setData(payload).request();

  static signUp = (payload: Object) => Http.setMethod(httpMethods.post).setUrl(Endpoints.SIGN_UP).setData(payload).request();

  static signOut = () => Http.setMethod(httpMethods.post).setUrl(Endpoints.SIGN_OUT).setToken(api.getToken()).request();
}

export default AuthHttp;
