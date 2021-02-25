import { ACCOUNT_INFO } from '../actions';
import { getLoadingState, getReadyState, getErrorState, editData } from '../utils/store';

const initialState = {
  isError: false,
  isLoading: false,
  isLoaded: false,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_INFO.SUCCESS:
      return {
        ...state,
        ...getReadyState(action.data),
      };
    case ACCOUNT_INFO.LOADING:
      return {
        ...state,
        ...getLoadingState(),
      };
    case ACCOUNT_INFO.FAIL:
      return {
        ...state,
        ...getErrorState(action.data),
        errorMessage: action.message,
      };
    case ACCOUNT_INFO.SET_DATA:
      return {
        ...state,
        ...editData(state, (data) => ({ ...data, ...action.data })),
      };
    default:
      return state;
  }
};
