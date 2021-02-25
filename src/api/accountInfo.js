import { ACCOUNT_INFO } from '../constants/fields';

export const performAccountInfo = (raw) => ({
  id: raw[ACCOUNT_INFO.ID],
  nickname: raw[ACCOUNT_INFO.NICKNAME],
  login: raw[ACCOUNT_INFO.LOGIN],
  pgp: raw[ACCOUNT_INFO.PGP] || null,
  email: raw[ACCOUNT_INFO.EMAIL] || null,
});
