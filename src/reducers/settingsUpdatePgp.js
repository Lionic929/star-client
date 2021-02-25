import { SETTINGS_UPDATE_PGP } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SETTINGS_UPDATE_PGP.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
        success: true,
      };

    case SETTINGS_UPDATE_PGP.LOADING:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case SETTINGS_UPDATE_PGP.FAIL:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.message,
        success: false,
      };

    default:
      return state;
  }
};
