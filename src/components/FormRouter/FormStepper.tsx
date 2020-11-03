import React from 'react';

import { useAppContext } from 'src/store';
import LayoutWrapper from '../LayoutWrapper/Wrapper';
import { NavigationForm } from '../NavigationForm';

function FormStepper(Props: any) {
  const { children } = Props;
  const { state } = useAppContext();
  const childrenArray = React.Children.toArray(children);
  const steps = childrenArray.map((step: any, index: any) => {
    const controlProps = {
      index,
      last: index + 1 === childrenArray.length,
    };

    if (state.app.metadata.actualPage === index) {
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
      <NavigationForm
        logoLink="https://kellercovered.com/eo"
        backClick={prevStep}
        customCTAHandler={customCTAHandler}
        withBackButton
      />
      {steps}
    </LayoutWrapper>
  );
}

export default FormStepper;
