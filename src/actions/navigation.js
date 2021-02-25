import { NAVIGATION } from '.';
import { ROUTES } from '../constants/routes';

export const headerNavigatePath = (path, typePath) => {
  switch (path) {
    case ROUTES.LOGIN:
      typePath = 'auth';
      break;

    case ROUTES.SIGNUP:
      typePath = 'auth';
      break;

    case ROUTES.LOGOUT:
      typePath = 'auth';
      break;

    case ROUTES.RECOVERY_ACCOUNT_CONFIRM:
      typePath = 'auth';
      break;

    case ROUTES.RECOVERY_ACCOUNT_RESET:
      typePath = 'auth';
      break;

    case ROUTES.RECOVERY_ACCOUNT_UPDATE:
      typePath = 'auth';
      break;

    default:
      typePath = 'app';
  }

  return (dispatch) =>
    dispatch({
      type: NAVIGATION.CHANGE_ACTIVE_PATH,
      activePath: path,
      typePath,
    });
};

export const setPageLoading = (pageLoading) => {
  return {
    type: NAVIGATION.SET_PAGE_LOADING,
    payload: { pageLoading },
  };
};
