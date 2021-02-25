import { required, validator, password, passwordRepeat } from './index';
import { RECOVERY_ACCOUNT_RESET } from '../constants/fields';

const config = {
  [RECOVERY_ACCOUNT_RESET.LOGIN]: [required],
};

export const validate = (values) => validator(values, config);
