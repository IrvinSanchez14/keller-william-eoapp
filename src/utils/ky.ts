import ky from 'ky-universal';

export default ky.extend({
  prefixUrl: 'https://eo-dev-api.kellercovered.io/api/v1',
});
