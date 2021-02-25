export const getLoadingState = (state = {}, type = {}) => ({
  ...state,
  isLoading: true,
  isLoaded: false,
  isError: false,
  data: type,
});

export const getReadyState = (data = {}, type = {}) => ({
  data: data || type,
  isLoading: false,
  isLoaded: true,
  isError: false,
});

export const editData = (data, fn) => {
  data.data = fn(data.data);
  return data;
};

export const filterDataState = (dataState, data, fn) => {
  dataState.data = data.filter(fn);
  return dataState;
};

export const getErrorState = (data = {}, type = {}) => ({
  data: data || type,
  isLoading: false,
  isLoaded: false,
  isError: true,
});

export const isLoading = (state = {}) => !!state.isLoading;
export const isLoaded = (state = {}) => !!state.isLoaded;
export const isError = (state = {}) => !!state.isError;

export const getData = (state = {}, defaultValue = {}) => state.data || defaultValue;
export const hasData = (state = {}) => !!state.data;
export const shouldLoad = (state = {}) => !state.isLoaded && !state.isLoading;

export const setLocalData = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getLocalData = (key) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const setSessionData = (key, value) => sessionStorage.setItem(key, JSON.stringify(value));
export const getSessionData = (key, defaultValue = null) => {
  const data = sessionStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return defaultValue;
};
