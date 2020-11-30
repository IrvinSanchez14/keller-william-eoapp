import ky from './ky';
import { useEffect, useState, useCallback } from 'react';
import { HTTPError } from 'ky-universal';

type States = 'idle' | 'fetching' | 'error' | 'success';

export function useKyGet<T>(
  url: string,
  id: any,
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
        await ky
          .get(urlKey, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
          .json<T>()
          .then((response: any) => {
            setData(response);
            setState('success');
          })
          .catch((err) => {
            if (err.response.status === 401) {
              ky.post(`tokens/refresh`, { json: { eoSessionId: id } })
                .json()
                .then((responseTok: any) => {
                  localStorage.setItem('token', responseTok.accessToken);
                  ky.get(url, {
                    headers: { Authorization: `Bearer ${responseTok.accessToken}` },
                  })
                    .json<T>()
                    .then((responseA: any) => {
                      setData(responseA);
                    });
                });
            }
          });
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
