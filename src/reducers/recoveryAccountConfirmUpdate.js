import { RECOVERY_ACCOUNT_CONFIRM_UPDATE } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
  data: {
    email: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECOVERY_ACCOUNT_CONFIRM_UPDATE.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
      };

    case RECOVERY_ACCOUNT_CONFIRM_UPDATE.LOADING:
      return {
        ...state,
        loading: true,
      };

    case RECOVERY_ACCOUNT_CONFIRM_UPDATE.FAIL:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.message,
      };
    case RECOVERY_ACCOUNT_CONFIRM_UPDATE.SET_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.data,
        },
      };

    default:
      return state;
  }
};
