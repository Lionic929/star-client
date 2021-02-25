import Router from 'next/router';

const scrollToTop = (isScrollToTop) => {
  if (isScrollToTop) {
    window.scrollTo(0, 0);
  }
};

export const redirect = (pathname, config = {}) => {
  const { local = true, query, as = pathname, dynamic, params, scrollTop = true, shallow } = config;

  if (dynamic) {
    return Router.push(pathname(), pathname(params), { shallow, query: { ...query } }).then(() =>
      scrollToTop(scrollTop),
    );
  }

  if (local) {
    return Router.push({ pathname, as, query, shallow }).then(() => scrollToTop(scrollTop));
  }

  window.location.href = pathname;
};

export const linkRedirect = (path, confirg) => (e) => {
  e.preventDefault();
  redirect(path, confirg);
};

export const getQuery = (id) => {
  const data = Router.query[id];

  if (!data) return null;
  if (data === 'true') return true;
  if (data === 'false') return false;

  return data;
};

export const scrollTo = (elementId, offset = 0) => {
  if (elementId) {
    return window.scrollBy({
      top: document.getElementById(elementId).offsetTop - document.documentElement.scrollTop - offset,
      behavior: 'smooth',
    });
  }
};
