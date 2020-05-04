import FormStepper from './FormStepper';

function FormRouter(Props: any) {
  const { history, session, children } = Props;

  const dataFetched = true;
  const newstrore = {
    step: 1,
  };

  return (
    dataFetched && (
      <FormStepper session={session} store={newstrore} history={history}>
        {children}
      </FormStepper>
    )
  );
}

export default FormRouter;
