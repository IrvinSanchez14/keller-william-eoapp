import ky from './ky';
import { useEffect, useState, useCallback } from 'react';
import { HTTPError } from 'ky-universal';

type States = 'idle' | 'fetching' | 'error' | 'success';

export function useKyGet<T>(
  url: string,
  options: { pause?: boolean } = { pause: false },
): { state: States; error?: HTTPError; data?: T } {
  const [state, setState] = useState<States>('idle');
  const [data, setData] = useState<T>();
  const [error, setError] = useState<HTTPError>();

  const kyGet = useCallback(
    async (urlKey: string) => {
      if (options.pause) return;
      setState('fetching');
      try {
        const response = await ky.get(urlKey).json<T>();
        setData(response);
        setState('success');
      } catch (err) {
        setError(err);
        setState('error');
      }
    },
    [options.pause],
  );

  useEffect(() => {
    kyGet(url);
  }, [url, kyGet]);

  return { state, data, error };
}
