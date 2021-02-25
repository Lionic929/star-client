import { SETTINGS_UPDATE_EMAIL, SETTINGS_UPDATE_PASSWORD } from '../constants/fields';

export const convertSettingsUpdateEmailData = ({ email, password }) => ({
  [SETTINGS_UPDATE_EMAIL.PASSWORD]: password,
  [SETTINGS_UPDATE_EMAIL.EMAIL]: email,
});

export const convertSettingsUpdatePasswordData = ({ currentPassword, newPassword }) => ({
  password: currentPassword,
  [SETTINGS_UPDATE_PASSWORD.NEW_PASSWORD]: newPassword,
});

export const performSettingsUpdateEmailData = (raw) => ({
  email: raw[SETTINGS_UPDATE_EMAIL.EMAIL],
});
