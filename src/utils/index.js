export const throttle = (func, ms) => {
  let isThrottled = false;
  let savedArgs = null;
  let savedThis = null;

  function wrapper(...arg) {
    if (isThrottled) {
      savedArgs = arg;
      savedThis = this;
      return;
    }

    func.apply(this, arg);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  }

  return wrapper;
};

export const isScrollView = (id) => {
  const { innerHeight, scrollY } = window;
  const { offsetTop, scrollHeight } = document.getElementById(id);

  return innerHeight + scrollY > offsetTop + scrollHeight - 600;
};

export const debounce = (f, ms) => {
  let isCooldown = false;

  return function wrapper(...arg) {
    if (isCooldown) return;

    f.apply(this, arg);

    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;
    }, ms);
  };
};
