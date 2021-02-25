import { LOGIN } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
  reset: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
      };

    case LOGIN.LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: null,
      };

    case LOGIN.FAIL:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.message,
      };

    default:
      return state;
  }
};
