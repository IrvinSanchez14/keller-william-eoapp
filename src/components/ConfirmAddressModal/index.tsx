import Dialog from '@material-ui/core/Dialog';
import classnames from 'classnames';
import Container from '@material-ui/core/Container';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useStyles } from './styles';
import { Icon } from '../Icon';
import { Formik, Form, useField, useFormikContext, FormikProps } from 'formik';
import { confirmAddressModalShema } from 'src/helpers/validations';
import { LabelForm } from '../LabelForm';
import { states } from 'src/helpers/constants';

interface Props {
  showModal: boolean;
  closeModal: () => void;
}

interface AddressProps {
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

const ConfirmAddressModal = ({ showModal, closeModal }: Props) => {
  const classes = useStyles();
  const field = useField('streetAddress');
  const { submitForm } = useFormikContext();

  async function verifyAddress({ street, city, state, postalCode }: AddressProps) {
    field[2].setValue(`${street}, ${city}, ${state} ${postalCode}`);
    closeModal();
    submitForm();
  }

  function getErrorLabel(formik: FormikProps<any>, field: string): any {
    const test = formik.getFieldMeta(field).touched ? formik.errors[field] : '';
    return test;
  }

  return (
    <Dialog fullWidth maxWidth="xl" aria-labelledby="max-width-dialog-title" open={showModal}>
      <div className={classes.container}>
        <DialogTitle className={classes.header}>
          <Icon className={classes.dogIcon} name="dog" />
          <Typography className={classes.text}>{'RUH ROH!'}</Typography>
          <i onClick={closeModal} className={classnames('fas fa-times', classes.closeIcon)} />
        </DialogTitle>
        <DialogContent className={classes.content}>
          <Container className={classes.contentInformation}>
            <Typography variant="h1" className={classnames(classes.text, classes.title)}>
              We couldn&apos;t confirm your address
            </Typography>
            <Typography className={classnames(classes.text, classes.subTitle)}>
              Don’t worry - there are many addresses that cannot be confirmed. Please confirm your
              details and most insurance carriers will still be able to offer you quotes.
            </Typography>
          </Container>
          <Formik
            initialValues={{ street: '', city: '', state: '', postalCode: '' }}
            validationSchema={confirmAddressModalShema}
            onSubmit={verifyAddress}
          >
            {(formik) => (
              <Container className={classes.formContainer}>
                <Form className={classes.form}>
                  <div className={classes.inputContainer}>
                    <div className={classes.inputfieldContainer}>
                      <LabelForm
                        className={classes.label}
                        label={'Street'}
                        errorLabel={getErrorLabel(formik, 'street')}
                      />
                      <input
                        placeholder={'E.g. 1100 Congress Ave.'}
                        value={formik.values.street}
                        className={classes.inputStyles}
                        {...formik.getFieldProps('street')}
                      />
                    </div>
                    <div className={classes.inputfieldContainer}>
                      <LabelForm
                        className={classes.label}
                        label={'City'}
                        errorLabel={getErrorLabel(formik, 'city')}
                      />
                      <input
                        placeholder={'E.g. Austin'}
                        value={formik.values.city}
                        className={classes.inputStyles}
                        {...formik.getFieldProps('city')}
                      />
                    </div>
                  </div>
                  <div className={classes.inputContainer}>
                    <div className={classes.inputfieldContainer}>
                      <LabelForm
                        className={classes.label}
                        label={'State'}
                        errorLabel={getErrorLabel(formik, 'state')}
                      />
                      <Select
                        disableUnderline
                        displayEmpty
                        className={classnames(
                          classes.select,
                          formik.values.state === '' ? classes.selectDefaultValue : {},
                        )}
                        placeholder={'Ostras'}
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={formik.values.state}
                        {...formik.getFieldProps('state')}
                      >
                        <MenuItem disabled value="">
                          <em>E.g. TX</em>
                        </MenuItem>
                        {states.map(({ name, abbreviation }) => (
                          <MenuItem key={`${abbreviation}-${name}`} value={name}>
                            {`${name}-${abbreviation}`}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                    <div className={classes.inputfieldContainer}>
                      <LabelForm
                        className={classes.label}
                        label={'ZIP'}
                        errorLabel={getErrorLabel(formik, 'postalCode')}
                      />
                      <input
                        placeholder={'E.g. 78701'}
                        value={formik.values.postalCode}
                        className={classes.inputStyles}
                        {...formik.getFieldProps('postalCode')}
                      />
                    </div>
                  </div>
                  <Container className={classes.buttonContainer}>
                    <ButtonBase
                      type="submit"
                      data-test-id="verifyAddress"
                      className={classes.button}
                    >
                      <Typography className={classes.buttonText}>{'Confirm address'}</Typography>
                    </ButtonBase>
                  </Container>
                </Form>
              </Container>
            )}
          </Formik>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default ConfirmAddressModal;
