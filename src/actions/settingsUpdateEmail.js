import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { SETTINGS_UPDATE_EMAIL } from './index';
import { setAccountInfoData } from './accountInfo';
import { performSettingsUpdateEmailData, convertSettingsUpdateEmailData } from '../api/settings';

const setFail = (message) => ({
  type: SETTINGS_UPDATE_EMAIL.FAIL,
  message,
});

const setSuccess = () => ({
  type: SETTINGS_UPDATE_EMAIL.SUCCESS,
});

const setLoading = () => ({
  type: SETTINGS_UPDATE_EMAIL.LOADING,
});

export const settingsUpdateEmail = (payloadData) => {
  const payload = convertSettingsUpdateEmailData(payloadData);

  return async (dispatch) => {
    dispatch(setLoading());
    try {
      await httpRequest.patch(API.UPDATE_EMAIL, payload);
      dispatch(setAccountInfoData(performSettingsUpdateEmailData({ email: payload.email })));
      dispatch(setSuccess());
      return { success: true };
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
      return { success: false };
    }
  };
};
