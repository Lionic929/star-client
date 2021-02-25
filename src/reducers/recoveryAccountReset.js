import { RECOVERY_ACCOUNT_RESET } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECOVERY_ACCOUNT_RESET.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
      };

    case RECOVERY_ACCOUNT_RESET.LOADING:
      return {
        ...state,
        loading: true,
      };

    case RECOVERY_ACCOUNT_RESET.FAIL:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.message,
      };
    case RECOVERY_ACCOUNT_RESET.SET_DATA:
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
