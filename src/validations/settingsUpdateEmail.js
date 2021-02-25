import { required, validator, email } from './index';
import { SETTINGS_UPDATE_EMAIL } from '../constants/fields';

const config = {
  [SETTINGS_UPDATE_EMAIL.PASSWORD]: [required],
  [SETTINGS_UPDATE_EMAIL.EMAIL]: [required, email],
};

export const validate = (values) => validator(values, config);
