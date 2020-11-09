import ky from 'ky-universal';
import { getBaseUrl } from './constants';

export default ky.extend({
  prefixUrl: getBaseUrl(process.env.NODE_ENV),
});
