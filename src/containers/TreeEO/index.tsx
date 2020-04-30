import React from 'react';

import { useAppContext } from 'src/store';
import FormRouter from 'src/components/FormRouter';
import { FirmInformation } from 'src/containers/TreeEO/FirmInformation';

function AppEO() {
  const { state, dispatch } = useAppContext();
  console.log('STATE', state);
  return (
    <FormRouter>
      <FirmInformation dispatch={dispatch} />
    </FormRouter>
  );
}

export default AppEO;
