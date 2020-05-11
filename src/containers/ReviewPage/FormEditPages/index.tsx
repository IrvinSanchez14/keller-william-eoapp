import { EditPageFirmInformation } from './firmInformation';

interface IFormEditPages {
  nameForm: string;
}

const CONSTANTS_EDIT_PAGE = {
  FIRM_INFORMATION: 'Firm information',
  AGENT_INFORMATION: 'Agent information',
};

export function FormsEditPage(Props: IFormEditPages) {
  const { nameForm } = Props;
  const renderComponent = () => {
    switch (nameForm) {
      case CONSTANTS_EDIT_PAGE.FIRM_INFORMATION: {
        return <EditPageFirmInformation />;
      }
      case CONSTANTS_EDIT_PAGE.AGENT_INFORMATION: {
        return null;
      }
      default:
        return nameForm;
    }
  };
  return <>{renderComponent()}</>;
}
