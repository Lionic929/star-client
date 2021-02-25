import { required, validator } from './index';
import { SETTINGS_UPDATE_PGP } from '../constants/fields';

const config = {
  [SETTINGS_UPDATE_PGP.PGP]: [required],
};

export const validate = (values) => validator(values, config);
