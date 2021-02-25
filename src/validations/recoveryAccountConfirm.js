import { required, validator, maxLength, minLength, passwordRepeat } from './index';
import { RECOVERY_ACCOUNT_CONFIRM_UPDATE } from '../constants/fields';

const config = {
  [RECOVERY_ACCOUNT_CONFIRM_UPDATE.CODE]: [required, maxLength(100)],
  [RECOVERY_ACCOUNT_CONFIRM_UPDATE.PASSWORD]: [required, maxLength(100), minLength(8)],
  [RECOVERY_ACCOUNT_CONFIRM_UPDATE.REPEAT_PASSWORD]: [
    required,
    passwordRepeat(RECOVERY_ACCOUNT_CONFIRM_UPDATE.PASSWORD),
  ],
};

export const validate = (values) => validator(values, config);
