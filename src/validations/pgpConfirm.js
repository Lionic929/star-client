import { required, validator } from './index';
import { PGP_CONFIRM } from '../constants/fields';

const config = {
  [PGP_CONFIRM.PGP_KEY]: [required],
  [PGP_CONFIRM.DECODED_PGP_KEY]: [required],
};

export const validate = (values) => validator(values, config);
