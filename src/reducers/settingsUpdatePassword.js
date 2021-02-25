import { SETTINGS_UPDATE_PASSWORD } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SETTINGS_UPDATE_PASSWORD.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
        success: true,
      };

    case SETTINGS_UPDATE_PASSWORD.LOADING:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case SETTINGS_UPDATE_PASSWORD.FAIL:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.message,
        success: false,
      };

    case SETTINGS_UPDATE_PASSWORD.CONFIRM:
      return {
        ...state,
        payload: action.payload,
      };

    default:
      return state;
  }
};
