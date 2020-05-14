import FormStepper from './FormStepper';
import { Children, cloneElement } from 'react';

function FormRouter(Props: any) {
  const { onSubmit, history, session, children, intl, dispatch, formData } = Props;

  const dataFetched = true;
  const newstrore = {
    step: 1,
  };

  const steps = Children.map(children, (child) =>
    cloneElement(child, { intl, dispatch, formData, onSubmit }),
  );

  return (
    dataFetched && (
      <FormStepper session={session} store={newstrore} history={history}>
        {steps}
      </FormStepper>
    )
  );
}

export default FormRouter;
