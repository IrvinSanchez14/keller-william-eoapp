const API_URL_STATING = 'https://eo-dev-api.kellercovered.io/api/v1';
const API_URL_PRODUCTION = 'https://eo-api.kellercovered.com/api/v1';
const GOOGLE_MAPS_API_KEY = 'AIzaSyCvX_Erv3uDmzUHOUMl77Hn8rS1HihXX18';
const getBaseUrl = (env: string): string =>
  env === 'production' ? API_URL_PRODUCTION : API_URL_STATING;

export { API_URL_STATING, API_URL_PRODUCTION, GOOGLE_MAPS_API_KEY, getBaseUrl };
