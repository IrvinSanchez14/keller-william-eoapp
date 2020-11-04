const API_URL_STATING = 'https://eo-dev-api.kellercovered.io/api/v1';

const API_URL_PRODUCTION = 'https://eo-api.kellercovered.com/api/v1';
const NEW_API_URL_STAGING = 'https://api2-dev.kellercovered.io/kc-svc-eo-application/api/v1';
const NEW_API_URL_PRODUCTION = 'https://api2-dev.kellercovered.io/kc-svc-eo-application/api/v1';
const getBaseUrl = (env: string): string =>
  env === 'production' ? NEW_API_URL_PRODUCTION : NEW_API_URL_STAGING;

export { NEW_API_URL_STAGING, NEW_API_URL_PRODUCTION, getBaseUrl };
