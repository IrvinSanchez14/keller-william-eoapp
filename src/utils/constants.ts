const API_URL_STATING = 'https://eo-dev-api.kellercovered.io/api/v1';

const API_URL_PRODUCTION = 'https://eo-api.kellercovered.com/api/v1';
const getBaseUrl = (env: string): string =>
  env === 'production' ? API_URL_PRODUCTION : API_URL_STATING;

export { API_URL_STATING, API_URL_PRODUCTION, getBaseUrl };
