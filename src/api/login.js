import { LOGIN } from '../constants/fields';

export const convertLoginData = ({ login, password, captcha }) => ({
  [LOGIN.LOGIN]: login,
  [LOGIN.PASSWORD]: password,
  [LOGIN.CAPTCHA]: captcha,
});
