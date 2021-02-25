import * as jwtDecode from 'jwt-decode';
import axios from 'axios';
import { setCookie, getBrowserCookie } from './cookie';
import { COOKIE_AUTH } from '../constants';
import { logOut } from '../actions/login';

export const httpRequest = axios.create({
  baseURL: `${process.env.API}`,
  timeout: 100000,
});

export const authDecode = (raw) => jwtDecode(raw);

export const AUTH_HEADER = 'authorization';
export const setAutorizationHeader = (tokenHash) => {
  const token = `Bearer ${tokenHash}`;

  httpRequest.defaults.headers.common[AUTH_HEADER] = token;
};

export const setAutorization = (token) => {
  setAutorizationHeader(token);

  setCookie(COOKIE_AUTH, token);
};

const authToken = getBrowserCookie(COOKIE_AUTH);
if (authToken) {
  setAutorizationHeader(authToken);
}

const onResponseSuccess = (response) => response;

const onResponseError = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      return logOut();
    }

    if (error.response.status === 500) {
      error.response.data.message = 'INTERNAL_SERVER_ERROR';
    }

    return Promise.reject(error);
  }
};

httpRequest.interceptors.response.use(onResponseSuccess, onResponseError);

export default httpRequest;
