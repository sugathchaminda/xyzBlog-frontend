import { httpMethods } from 'enums';
import { Http } from 'library';
import api from 'api/client';

import * as Endpoints from 'constants/endpoints.constant';

class DashboardHttp {
  static getProfile = () => Http.setMethod(httpMethods.get).setUrl(Endpoints.GET_PROFILE).setToken(api.getToken()).request();
}

export default DashboardHttp;
