import { httpRequest } from '../utils/request';
import { API } from '../constants/api';
import { SETTINGS_UPDATE_PASSWORD } from './index';
import { convertSettingsUpdatePasswordData } from '../api/settings';

const setFail = (message) => ({
  type: SETTINGS_UPDATE_PASSWORD.FAIL,
  message,
});

export const settingsUpdatePasswordSuccess = () => ({
  type: SETTINGS_UPDATE_PASSWORD.SUCCESS,
});

const setLoading = () => ({
  type: SETTINGS_UPDATE_PASSWORD.LOADING,
});

export const settingsUpdatePassword = (payloadData) => {
  const payload = convertSettingsUpdatePasswordData(payloadData);

  return async (dispatch) => {
    dispatch(setLoading());

    try {
      await httpRequest.patch(API.UPDATE_PASSWORD, payload);
      dispatch(settingsUpdatePasswordSuccess());
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
