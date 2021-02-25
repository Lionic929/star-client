export const ROUTES = {
  HOME: '/',
  ERROR: '/error',
  NOT_FOUND: '/error-not-found',
  ACCESS_DENIED: '/error-access-denied',
  PRIVACY: '/privacy',
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIGNUP: '/signup',
  SETTINGS: '/settings',
  RECOVERY_ACCOUNT_RESET: '/recovery-account',
  RECOVERY_ACCOUNT_CONFIRM: '/recovery-account/confirm',
  PAYMENT: '/payment',
  SETTINGS_CONFIRM: '/settings/confirm',
};

export const PAGINATION_OFFSET = {
  TEST: 15,
};

export const QUERIES = {
  CONFIRM_EMAIL: 'email',
};

export const ANCHOR_ID = {};

export const AUTORELOAD_TIME = {
  TEST: 120000,
};

export const APP_MENU = [{ id: 1, tid: 'NAVIGATION.PATH.HOME', path: ROUTES.HOME }];

export const USER_LOGGED_MENU = [{ id: 1, tid: 'NAVIGATION.PATH.SETTINGS', path: ROUTES.SETTINGS }];

export const AUTH_MENU = [
  { id: 2, tid: 'NAVIGATION.PATH.LOGIN', path: ROUTES.LOGIN },
  { id: 3, tid: 'NAVIGATION.PATH.SIGNUP', path: ROUTES.SIGNUP },
  { id: 4, tid: 'NAVIGATION.PATH.RECOVERY_ACCOUNT_RESET', path: ROUTES.RECOVERY_ACCOUNT_RESET },
];

export const AUTH_MENU_ADDITIONAL = [{ id: 2, tid: 'NAVIGATION.PATH.HOME', path: ROUTES.HOME }];

export const USER_NO_LOGGED_MENU = [
  { id: 1, tid: 'NAVIGATION.PATH.LOGIN', path: ROUTES.LOGIN },
  { id: 2, tid: 'NAVIGATION.PATH.SIGNUP', path: ROUTES.SIGNUP },
];
