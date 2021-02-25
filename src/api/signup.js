import { SIGNUP } from '../constants/fields';

export const convertSignupData = ({ login, email, password }) => ({
  [SIGNUP.LOGIN]: login,
  [SIGNUP.EMAIL]: email,
  [SIGNUP.PASSWORD]: password,
});
