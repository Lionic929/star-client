import lang from 'i18next';
import { ROLE_TYPE } from '../constants/static';

export const getDateTime = (raw) => new Date(raw).toLocaleString();
export const getDate = (raw) => new Date(raw).toLocaleDateString();
export const getGdsCategory = (value) => value && lang.t(`STATIC.GDS_CATEGORY.${value}`);

export const getUserPrefix = (role) => {
  const type = Object.keys(ROLE_TYPE).find((key) => ROLE_TYPE[key] === role);

  if (!type) {
    return null;
  }

  return lang.t(`STATIC.ROLE_PREFIX.${type}`);
};

export const getUserRole = (role) => {
  const type = Object.keys(ROLE_TYPE).find((key) => ROLE_TYPE[key] === role);

  if (!type) {
    return null;
  }

  return lang.t(`STATIC.ROLE_TYPE.${type}`);
};
