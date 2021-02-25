import { NAVIGATION } from '../actions';

const initialState = {
  activePath: null,
  typePath: null,
  pageLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATION.CHANGE_ACTIVE_PATH:
      return {
        ...state,
        activePath: action.activePath,
        typePath: action.typePath,
      };
    case NAVIGATION.SET_PAGE_LOADING:
      return {
        ...state,
        pageLoading: action.payload.pageLoading,
      };
    default:
      return state;
  }
};
