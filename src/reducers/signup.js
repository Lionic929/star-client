import { SIGNUP } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
      };

    case SIGNUP.LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: null,
      };

    case SIGNUP.FAIL:
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
