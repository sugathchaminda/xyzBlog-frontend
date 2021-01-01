/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import { httpMethods } from 'enums';
import { IHeaders } from 'types/data.types';
import store from 'Redux/store';
import { setLoaderRequest, removeErrorRequest, removeLoaderRequest } from 'Redux/global/global.actions';

class Http {
  method: httpMethods;

  url: string;

  token: string;

  data: Object;

  constructor() {
    this.method = httpMethods.post;
    this.url = '';
    this.token = '';
    this.data = {};
  }

  setUrl(url: string) {
    this.url = url;
    return this;
  }

  setData(data: Object) {
    this.data = data;
    return this;
  }

  // set bearer token header
  setToken(token: string) {
    this.token = `Bearer ${token}`;
    return this;
  }

  // set authentication header token
  setTokenHeader(token: string) {
    this.token = token;
    return this;
  }

  setMethod(method: httpMethods) {
    this.method = method;
    return this;
  }

  unsetData() {
    this.data = [];
    return this;
  }

  async request() {
    try {
      store.dispatch(setLoaderRequest());
      store.dispatch(removeErrorRequest());

      let url = process.env.REACT_APP_PBC_ADMIN_ACCOUNT_SERVICE + this.url;
      if (this.method === httpMethods.get) url += this.serializeParams(this.data);

      const headers: IHeaders = {
        'Content-Type': 'application/json',
      };

      if (typeof this.token !== undefined) {
        headers.Authorization = this.token;
      }

      const config = {
        url,
        headers,
        method: this.method,
        data: JSON.stringify(this.data) || {},
      };

      const response = await axios(config);

      this.unsetData();

      store.dispatch(removeLoaderRequest());

      return response;
    } catch ({ response }) {
      this.unsetData();

      store.dispatch(removeLoaderRequest());

      return response;
      // throw response.data;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private serializeParams(params: any) {
    if (typeof params === undefined || Object.keys(params).length <= 0) return '';

    let queryString = '';
    // eslint-disable-next-line guard-for-in
    for (const key in params) {
      if (queryString !== '') queryString += '&';
      queryString += `${key}'='${encodeURIComponent(params[key])}`;
    }
    return `?${queryString}`;
  }
}

export default new Http();
