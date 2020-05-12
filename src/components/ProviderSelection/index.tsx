import ProviderCard from './ProviderCard';
import ProviderCardList from './ProviderCardList';
import ProviderCardHeader from './ProviderCardHeader';
import styled from 'styled-components';
import { useAppContext } from 'src/store';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { NavigationForm } from '../NavigationForm';
import DogIcon from '../DogIcon';
import ButtonForm from '../ButtonForm';

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

const StyledProviderSelection = styled.div`
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

const ProviderSelection: React.FC = () => {
  const { intl } = useAppContext();
  return (
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
              control={<Checkbox defaultChecked color="primary" />}
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
              label={intl.get('app.providerSelection.checkbox', { provider: 'Pearl Insurance' })}
              control={<Checkbox defaultChecked color="primary" />}
              labelPlacement="end"
            />
          </CardBody>
        </ProviderCard>
      </CardContainer>
      <ButtonContainer>
        <ButtonForm label="Submit" />
      </ButtonContainer>
    </StyledProviderSelection>
  );
};

export default ProviderSelection;
