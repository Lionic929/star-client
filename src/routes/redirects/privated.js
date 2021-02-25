import { redirect } from '../../utils/navigation';
import { ROUTES } from '../../constants/routes';

export const privated = (ctx) => {
  const { res, token } = ctx;

  if (!token) {
    if (res) {
      res.writeHead(302, {
        Location: ROUTES.LOGIN,
      });
      res.end();
    } else {
      redirect(ROUTES.LOGIN);
    }
  }
};
