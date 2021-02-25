import { httpRequest, setAutorization } from '../utils/request';
import { redirect } from '../utils/navigation';
import { convertLoginData } from '../api/login';

import { API } from '../constants/api';
import { ROUTES } from '../constants/routes';
import { LOGIN } from '.';

const loginFail = (message) => ({
  type: LOGIN.FAIL,
  message,
});

const loginSuccess = (token) => ({
  type: LOGIN.SUCCESS,
  token,
});

const loginLoading = () => ({
  type: LOGIN.LOADING,
});

export const logOut = () => {
  setAutorization(null);
  redirect(ROUTES.LOGIN, { local: false });
};
export const login = (actionData) => {
  const payload = convertLoginData(actionData);

  return (dispatch) => {
    dispatch(loginLoading());

    return httpRequest
      .post(API.LOGIN, payload)
      .then(({ data }) => {
        setAutorization(data.accessToken);
        redirect(ROUTES.HOME);

        return dispatch(loginSuccess(data.accessToken));
      })
      .catch(({ response: { data } }) => {
        dispatch(loginFail(data.message));
      });
  };
};

export const updateLogin = (data) => (dispatch) => {
  setAutorization(data);
  redirect(ROUTES.HOME);
  return dispatch(loginSuccess(data.accessToken));
};
