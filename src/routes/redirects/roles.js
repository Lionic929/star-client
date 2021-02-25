import { redirect } from '../../utils/navigation';
import { authDecode } from '../../utils/request';
import { ROUTES } from '../../constants/routes';

export const roles = (...roleList) => (ctx) => {
  const { res, token } = ctx;
  const user = authDecode(token);

  const index = roleList.indexOf(user.role);

  if (index === -1) {
    if (res) {
      res.writeHead(302, {
        Location: ROUTES.ACCESS_DENIED,
      });
      res.end();
    } else {
      redirect(ROUTES.ACCESS_DENIED);
    }
  }
};
