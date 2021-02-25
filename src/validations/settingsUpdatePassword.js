import { required, validator, maxLength, minLength } from './index';
import { SETTINGS_UPDATE_PASSWORD } from '../constants/fields';

const config = {
  [SETTINGS_UPDATE_PASSWORD.CURRENT_PASSWORD]: [required],
  [SETTINGS_UPDATE_PASSWORD.NEW_PASSWORD]: [required, maxLength(100), minLength(8)],
};

export const validate = (values) => validator(values, config);
