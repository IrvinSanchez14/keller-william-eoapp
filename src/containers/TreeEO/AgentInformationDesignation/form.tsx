import { FielControlForm } from 'src/components/FieldControlForm';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';

const styles = {
  column: {
    width: '100%',
  },
};

export const FormAgentInformationDesignation = (formikProps: any) => {
  return (
    <>
      <Row wrap="wrap" margin="0 -8px">
        <Column padding="0px 8px" style={styles.column}>
          <FielControlForm
            data-test-id="numberAgentsSpecialDesignation"
            name="numberAgentsSpecialDesignation"
            label={'Number of agents'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={94}
            numberMask
          />
        </Column>
      </Row>
    </>
  );
};
