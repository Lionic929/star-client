import { CAPTCHA } from '../constants/fields';

export const performCaptchaData = (raw) => ({
  image: raw[CAPTCHA.IMAGE],
});
