import React from 'react';

import * as CONSTANTS from '../types/app';
import { FirmInformationProps, AgentInformationProps } from '../models/AppState';
import { PolicyInformation } from 'src/containers/TreeEO/PolicyInformation';

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

export const storeAgentInformation = (
  dispatch: React.Dispatch<any>,
  agentForm: AgentInformationProps,
) => {
  const storeValueAgent = { type: CONSTANTS.AGENT_INFORMATION_STORE, payload: agentForm };
  dispatch(storeValueAgent);
  return storeValueAgent;
};

export const setInformationPage = (dispatch: React.Dispatch<any>, page: number, title: string) => {
  const setInformation = {
    type: CONSTANTS.SET_INFORMATION_PAGE,
    payload: { page, title },
  };
  dispatch(setInformation);
  return setInformation;
};

export const storeInsurancePolicy = (
  dispatch: React.Dispatch<any>,
  insuranceForm: PolicyInformation,
) => {
  const storeValueInsurance = {
    type: CONSTANTS.SET_INSURANCE_POLICY_INFORMATION,
    payload: insuranceForm,
  };
  dispatch(storeValueInsurance);
  return storeValueInsurance;
};

export const storeClaimsPolicy = (dispatch: React.Dispatch<any>, claimForm: any) => {
  const storeValueClaim = {
    type: CONSTANTS.SET_CLAIMS_POLICY_INFORMATION,
    payload: claimForm,
  };
  dispatch(storeValueClaim);
  return storeValueClaim;
};

export const addClaimsPolicy = (dispatch: React.Dispatch<any>, claimForm: any) => {
  const storeValueClaim = {
    type: CONSTANTS.ADD_CLAIMS_POLICY_INFORMATION,
    payload: claimForm,
  };
  dispatch(storeValueClaim);
  return storeValueClaim;
};
