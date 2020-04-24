import React from 'react';

import { EXAMPLE_ACTION_CONTEXT } from '../types/examples/example';

export const exampleContext = (
	dispatch: React.Dispatch<any>,
	example: number
) => {
	const exampleAction = { type: EXAMPLE_ACTION_CONTEXT, payload: example };
	dispatch(exampleAction);
	return exampleAction;
};
