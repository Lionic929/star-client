import { SETTINGS_UPDATE_EMAIL } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SETTINGS_UPDATE_EMAIL.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
        success: true,
      };

    case SETTINGS_UPDATE_EMAIL.LOADING:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case SETTINGS_UPDATE_EMAIL.FAIL:
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
