import { AUTH } from '.';
import { performUserAuthData } from '../api/auth';
import { authDecode } from '../utils/request';

export const setAuthData = (token) => {
  const user = token ? performUserAuthData(authDecode(token)) : null;

  return (dispatch) =>
    dispatch({
      type: AUTH.SET_DATA,
      token,
      logged: !!token,
      user,
    });
};
