import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { ACCOUNT_BALANCE } from './index';

const setFail = (message) => ({
  type: ACCOUNT_BALANCE.FAIL,
  message,
});

const setSuccess = ({ data }) => ({
  type: ACCOUNT_BALANCE.SUCCESS,
  data,
});

const setLoading = () => ({
  type: ACCOUNT_BALANCE.LOADING,
});

export const getAccountBalance = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const { data } = await httpRequest.get(API.ACCOUNT_BALANCE);
      console.log(data);
      // dispatch(setSuccess({ data }));
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
