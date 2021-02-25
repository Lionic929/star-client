import { httpRequest, setAutorization } from '../utils/request';
import { redirect } from '../utils/navigation';

import { API } from '../constants/api';
import { ROUTES } from '../constants/routes';
import { RECOVERY_ACCOUNT_CONFIRM_UPDATE } from './index';
import { convertRecoveryAccountConfirmUpdateData } from '../api/recovery';

const setFail = (message) => ({
  type: RECOVERY_ACCOUNT_CONFIRM_UPDATE.FAIL,
  message,
});

const setSuccess = () => ({
  type: RECOVERY_ACCOUNT_CONFIRM_UPDATE.SUCCESS,
});

const setLoading = () => ({
  type: RECOVERY_ACCOUNT_CONFIRM_UPDATE.LOADING,
});

export const setRecoveryAccountConfirmUpdateData = (data) => ({
  type: RECOVERY_ACCOUNT_CONFIRM_UPDATE.SET_DATA,
  data,
});

export const sendRecoveryAccountConfirm = (payloadData) => {
  const { code, password } = convertRecoveryAccountConfirmUpdateData(payloadData);
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const { data } = await httpRequest.post(API.RECOVERY_ACCOUNT_CONFIRM_UPDATE({ code }), { password });
      setAutorization(data.accessToken);
      redirect(ROUTES.HOME);
      dispatch(setSuccess());
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
