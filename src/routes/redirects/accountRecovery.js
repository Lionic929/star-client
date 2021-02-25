import { redirect } from '../../utils/navigation';
import { ROUTES } from '../../constants/routes';

export const accountRecoveryConfirm = (ctx) => {
  const { email } = ctx.store.getState().recoveryAccountConfirmUpdate.data;
  if (!email) {
    if (typeof window !== 'undefined') {
      redirect(ROUTES.RECOVERY_ACCOUNT_RESET);
    } else {
      ctx.res.writeHead(302, { Location: ROUTES.RECOVERY_ACCOUNT_RESET }).end();
    }
  }
};
