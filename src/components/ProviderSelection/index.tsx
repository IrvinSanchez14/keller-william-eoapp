import ProviderCard from './ProviderCard';
import { Formik, Form, Field } from 'formik';
import ProviderCardList from './ProviderCardList';
import ProviderCardHeader from './ProviderCardHeader';
import styled from 'styled-components';
import { useAppContext } from 'src/store';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { NavigationForm } from '../NavigationForm';
import DogIcon from '../DogIcon';
import ButtonForm from '../ButtonForm';
import LayoutWrapper from '../LayoutWrapper/Wrapper';
import { useCallback } from 'react';
import ky from '../../utils/ky';
import AppState from 'src/store/models/AppState';
import { setAppState } from 'src/store/actions/app';

const CardBody = styled.section`
  padding: 2rem 4rem;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * + * {
    margin-top: 1rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  position: relative;
`;

const KaceyHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  z-index: 2;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.darkBlue};

  @media (min-width: 640px) {
    font-size: 2rem;
  }

  & > svg {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

const StyledProviderSelection = styled(Form)`
  & > * {
    margin-bottom: 1rem;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  z-index: 2;
  justify-content: start;

  & > button {
    width: 250px;
  }

  @media (min-width: 640px) {
    justify-content: end;
    max-width: 600px;
  }

  @media (min-width: 1260px) {
    max-width: 1260px;
  }
`;

type SessionFinishResponse = AppState['app'] & {
  id: string;
  completed: boolean;
  confirmationNumber: string;
};

const ProviderSelection: React.FC<{ sessionId?: string }> = ({ sessionId }) => {
  const { intl, state, dispatch } = useAppContext();

  const onSubmit = useCallback(
    (state: AppState['app']) => {
      if (!sessionId) return;
      return ky.post(`session/${sessionId}/finish`, { json: state }).json<SessionFinishResponse>();
    },
    [sessionId],
  );

  return (
    <LayoutWrapper withTreesAndHouseImage withGrayShapeRight>
      <Formik
        initialValues={{
          amWins: true,
          pearlInsurance: true,
        }}
        onSubmit={async (values) => {
          const providers: string[] = [];
          if (values.amWins) providers.push('amwins');
          if (values.pearlInsurance) providers.push('pearl');
          const body = { ...state.app, providers };
          const response = await onSubmit(body);
          setAppState(dispatch, { app: { ...body, ...response } });
        }}
      >
        <StyledProviderSelection>
          <NavigationForm withBackButton showStep={false} />
          <KaceyHeader>
            <DogIcon size="55px" mobileSize="55px" />
            <strong>{intl.get('app.providerSelection.kacey')}</strong>
          </KaceyHeader>
          <CardContainer>
            <ProviderCard>
              <ProviderCardHeader
                logo="/static/img/AmWins_Logo_White.svg"
                logoDescription="Am WINS Logo"
              />
              <CardBody>
                <ProviderCardList>
                  {intl
                    .get('app.providerSelection.list.amWins')
                    .split('\n')
                    .map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                </ProviderCardList>
                <FormControlLabel
                  label={intl.get('app.providerSelection.checkbox', { provider: 'Am WINS' })}
                  control={<Field as={Checkbox} name="amWins" defaultChecked color="primary" />}
                  labelPlacement="end"
                />
              </CardBody>
            </ProviderCard>
            <ProviderCard>
              <ProviderCardHeader
                logo="/static/img/PearlInsurance_Logo_White.svg"
                logoDescription="Pearl Insurance Logo"
              />
              <CardBody>
                <ProviderCardList>
                  {intl
                    .get('app.providerSelection.list.pearlInsurance')
                    .split('\n')
                    .map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                </ProviderCardList>
                <FormControlLabel
                  label={intl.get('app.providerSelection.checkbox', {
                    provider: 'Pearl Insurance',
                  })}
                  control={
                    <Field as={Checkbox} name="pearlInsurance" defaultChecked color="primary" />
                  }
                  labelPlacement="end"
                />
              </CardBody>
            </ProviderCard>
          </CardContainer>
          <ButtonContainer>
            <ButtonForm type="submit" label="Submit" />
          </ButtonContainer>
        </StyledProviderSelection>
      </Formik>
    </LayoutWrapper>
  );
};

export default ProviderSelection;
