import ky from 'ky-universal';

export function isHttpError(error: any): error is ky.HTTPError {
  return error instanceof ky.HTTPError;
}
