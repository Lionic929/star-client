import { redirect } from '../../utils/navigation';
import { ROUTES } from '../../constants/routes';

export const auth = (ctx) => {
  const { res, token } = ctx;

  if (token) {
    if (res) {
      res.writeHead(302, {
        Location: ROUTES.LOGOUT,
      });
      res.end();
    } else {
      redirect(ROUTES.LOGOUT);
    }
  }
};
