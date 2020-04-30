import React from 'react';

import { FIRM_CONFIRMATION_STORE } from '../types/app';
import { FirmInformationProps } from '../models/AppState';

export const storeFirmConfirmation = (
  dispatch: React.Dispatch<any>,
  firmForm: FirmInformationProps,
) => {
  const storeValueFirm = { type: FIRM_CONFIRMATION_STORE, payload: firmForm };
  dispatch(storeValueFirm);
  return storeValueFirm;
};
