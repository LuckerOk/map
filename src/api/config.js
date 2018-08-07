import fetchIntercept from 'fetch-intercept';

fetchIntercept.register({
  request: (url, config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers['x-access-token'] = token; // eslint-disable-line no-param-reassign
    }

    return [url, config];
  }
});
