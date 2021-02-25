import { httpRequest } from '../utils/request';
import { redirect } from '../utils/navigation';

import { API } from '../constants/api';
import { ROUTES } from '../constants/routes';
import { RECOVERY_ACCOUNT_RESET } from './index';
import { convertRecoveryAccountResetData, performRecoveryAccountConfirmUpdateData } from '../api/recovery';
import { setRecoveryAccountConfirmUpdateData } from './recoveryAccountConfirmUpdate';

const setFail = (message) => ({
  type: RECOVERY_ACCOUNT_RESET.FAIL,
  message,
});

const setSuccess = () => ({
  type: RECOVERY_ACCOUNT_RESET.SUCCESS,
});

const setLoading = () => ({
  type: RECOVERY_ACCOUNT_RESET.LOADING,
});

export const setRecoveryAccountResetData = (data) => ({
  type: RECOVERY_ACCOUNT_RESET.SET_DATA,
  data,
});

export const sendRecoveryAccountReset = (payloadData) => {
  const { email } = convertRecoveryAccountResetData(payloadData);
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      await httpRequest.get(API.RECOVERY_ACCOUNT_RESET({ email }));
      dispatch(setSuccess());
      dispatch(setRecoveryAccountConfirmUpdateData(performRecoveryAccountConfirmUpdateData({ email })));
      redirect(ROUTES.RECOVERY_ACCOUNT_CONFIRM);
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
