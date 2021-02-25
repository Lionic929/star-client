import { required, validator } from './index';
import { LOGIN } from '../constants/fields';

const config = {
  [LOGIN.LOGIN]: [required],
  [LOGIN.PASSWORD]: [required],
  [LOGIN.CAPTCHA]: [required],
};

export const validate = (values) => validator(values, config);
