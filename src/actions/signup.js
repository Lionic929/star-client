import { httpRequest, setAutorization } from '../utils/request';
import { redirect } from '../utils/navigation';
import { convertSignupData } from '../api/signup';

import { API } from '../constants/api';
import { ROUTES } from '../constants/routes';
import { SIGNUP } from '.';

const setFail = (message) => ({
  type: SIGNUP.FAIL,
  message,
});

const setSuccess = (token) => ({
  type: SIGNUP.SUCCESS,
  token,
});

const setLoading = () => ({
  type: SIGNUP.LOADING,
});

export const signup = (actionData) => {
  const payload = convertSignupData(actionData);

  return (dispatch) => {
    dispatch(setLoading());

    return httpRequest
      .post(API.SIGNUP, payload)
      .then(({ data }) => {
        setAutorization(data.accessToken);
        dispatch(setSuccess(data.accessToken));
        redirect(ROUTES.HOME);
      })
      .catch(({ response: { data } }) => {
        dispatch(setFail(data.message));
      });
  };
};
