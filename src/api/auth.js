import { AUTH_USER } from '../constants/fields';

export const performUserAuthData = (raw) => ({
  id: raw[AUTH_USER.ID],
  role: raw[AUTH_USER.ROLE],
  balance: raw[AUTH_USER.BALANCE] || 0,
});
