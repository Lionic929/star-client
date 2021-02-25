import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { ACCOUNT_INFO } from './index';

const setFail = (message) => ({
  type: ACCOUNT_INFO.FAIL,
  message,
});

const setSuccess = ({ data }) => ({
  type: ACCOUNT_INFO.SUCCESS,
  data,
});

const setLoading = () => ({
  type: ACCOUNT_INFO.LOADING,
});

export const setAccountInfoData = (data) => ({
  type: ACCOUNT_INFO.SET_DATA,
  data,
});

export const getAccountInfo = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await httpRequest.get(API.ACCOUNT_INFO);
      dispatch(setSuccess({ data: response.data }));
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
