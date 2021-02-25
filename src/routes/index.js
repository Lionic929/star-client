import { ROUTES } from '../constants/routes';

import initRouter from './router';

import { privated, auth, accountRecoveryConfirm } from './redirects';

const routeSwitch = initRouter({
  [ROUTES.HOME]: [],
  [ROUTES.LOGIN]: [auth],
  [ROUTES.LOGOUT]: [privated],
  [ROUTES.SIGNUP]: [auth],
  [ROUTES.SETTINGS]: [privated],
  [ROUTES.RECOVERY_ACCOUNT_RESET]: [auth],
  [ROUTES.RECOVERY_ACCOUNT_CONFIRM]: [auth, accountRecoveryConfirm],
});

export default async (ctx) => {
  await routeSwitch(ctx.pathname, ctx);
};
