import { required, validator, login, maxLength, boolean, minLength, passwordRepeat } from './index';
import { SIGNUP } from '../constants/fields';

const config = {
  [SIGNUP.LOGIN]: [required, login],
  [SIGNUP.NICKNAME]: [required, maxLength(16), minLength(3)],
  [SIGNUP.PASSWORD]: [required, maxLength(100), minLength(8)],
  [SIGNUP.PASSWORD_REPEAT]: [required, passwordRepeat(SIGNUP.PASSWORD)],
  [SIGNUP.PRIVACY]: [required, boolean],
  [SIGNUP.CAPTCHA]: [required],
};

export const validate = (values) => validator(values, config);
