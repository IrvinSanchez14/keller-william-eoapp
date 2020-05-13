import { FielControlForm } from 'src/components/FieldControlForm';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';

export const FormAgentInformationDesignation = (formikProps: any) => {
  return (
    <>
      <Row wrap="wrap" margin="0 -8px">
        <Column padding="0px 8px">
          <FielControlForm
            data-test-id="numberAgentSpecialDesignation"
            name="numberAgentSpecialDesignation"
            type="number"
            label={'Number of agents'}
            setFieldTouched={formikProps.setFieldTouched}
            errors={formikProps.errors}
            touched={formikProps.touched}
            shouldValidateOnMount
            renderFastField
            customWidth={94}
          />
        </Column>
      </Row>
    </>
  );
};
