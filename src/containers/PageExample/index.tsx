import { useEffect } from 'react';
import { useAppContext } from 'src/store';
import { exampleContext } from 'src/store/actions/example';
import Layout from 'src/components/Layout';

export default function PageExample(): JSX.Element {
  const { state, dispatch, intl } = useAppContext();

  useEffect(() => {
    exampleContext(dispatch, 0);
  }, []);

  /*const changeState = () => {
    const newState = state.Example + 1;
    exampleContext(dispatch, newState);
  };*/

  return (
    <div>
      <h1>{intl.get('dialog.error.caption')}</h1>
      <Layout />
    </div>
  );
}
