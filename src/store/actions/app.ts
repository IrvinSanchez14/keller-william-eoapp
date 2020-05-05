import React from 'react';

import * as CONSTANTS from '../types/app';
import { FirmInformationProps } from '../models/AppState';

export const setPageLocation = (dispatch: React.Dispatch<any>, page: number) => {
  const setPage = {
    type: CONSTANTS.SET_PAGE_LOCATION,
    payload: page,
  };
  dispatch(setPage);
  return setPage;
};

export const storeFirmConfirmation = (
  dispatch: React.Dispatch<any>,
  firmForm: FirmInformationProps,
) => {
  const storeValueFirm = { type: CONSTANTS.FIRM_CONFIRMATION_STORE, payload: firmForm };
  dispatch(storeValueFirm);
  return storeValueFirm;
};

export const changeStatusProgressBar = (dispatch: React.Dispatch<any>, status: number) => {
  const changeProgressBar = { type: CONSTANTS.CHANGE_STATUS_PROGRESS_BAR, payload: status };
  dispatch(changeProgressBar);
  return changeProgressBar;
};
