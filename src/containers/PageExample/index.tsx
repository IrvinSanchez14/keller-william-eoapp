import React, { useEffect } from 'react';
import { useAppContext } from 'src/store';
import { exampleContext } from 'src/store/actions/example';

export default function PageExample(): JSX.Element {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    exampleContext(dispatch, 0);
  }, []);

  const changeState = () => {
    const newState = state.Example + 1;
    exampleContext(dispatch, newState);
  };

  return (
    <div>
      <h1>Irvin Example</h1>
      <button onClick={() => changeState()}>Click Me!</button>
      {state.Example}
    </div>
  );
}
