import { RECOVERY_ACCOUNT_RESET, RECOVERY_ACCOUNT_CONFIRM_UPDATE } from '../constants/fields';

export const convertRecoveryAccountResetData = ({ email }) => ({
  [RECOVERY_ACCOUNT_RESET.EMAIL]: email,
});

export const convertRecoveryAccountConfirmUpdateData = ({ code, password }) => ({
  [RECOVERY_ACCOUNT_CONFIRM_UPDATE.CODE]: code,
  [RECOVERY_ACCOUNT_CONFIRM_UPDATE.PASSWORD]: password,
});

export const performRecoveryAccountConfirmUpdateData = (raw) => ({
  email: raw[RECOVERY_ACCOUNT_RESET.EMAIL],
});
