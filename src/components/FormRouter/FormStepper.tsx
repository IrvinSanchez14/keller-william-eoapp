import React from 'react';

import LayoutWrapper from '../LayoutWrapper/Wrapper';
import { NavigationForm } from '../NavigationForm';

function FormStepper(Props: any) {
  const { store, children } = Props;
  const childrenArray = React.Children.toArray(children);
  const steps = childrenArray.map((step: any, index: any) => {
    console.log('childreeeeeeeeeeen', step);
    const controlProps = {
      index,
      last: index + 1 === childrenArray.length,
    };

    const state = {
      store,
    };

    if (store.step === index + 1) {
      return React.cloneElement(step, {
        ...controlProps,
        ...step.props,
        ...state,
      });
    }
    return null;
  });

  const prevStep = () => {
    /*const {
      store,
      session: {sendFormGAEvent},
      stepper: {isCurrBitingHistoryView},
    } = this.props;

    if (store.step > 1) {
      sendFormGAEvent('back', {isCurrBitingHistoryView});
      store.prevStep();
    }*/
  };

  const customCTAHandler = () => {
    /*const {
      session: {sendFormGAEvent},
      stepper: {isCurrBitingHistoryView},
    } = this.props;

    sendFormGAEvent('hotline', {isCurrBitingHistoryView});*/
  };

  return (
    <LayoutWrapper withTreesAndHouseImage withGrayShapeRight>
      <NavigationForm backClick={prevStep} customCTAHandler={customCTAHandler} withBackButton />
      {steps}
    </LayoutWrapper>
  );
}

export default FormStepper;
