import { Component } from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';

import { FormApp } from 'src/components/FormApp';
import { Icon } from 'src/components/Icon';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';

const getTypesCommission = [
  {
    id: 1,
    icon: 'singleDefault',
    label: 'Residential',
  },
  {
    id: 2,
    icon: 'commercialDefault',
    label: 'Commercial',
  },
  {
    id: 3,
    icon: 'farmDefault',
    label: 'Farm/Ranch',
  },
  {
    id: 4,
    icon: 'auctioneringDefault',
    label: 'Auctioneering',
  },
  {
    id: 5,
    icon: 'mortgageDefault',
    label: 'Mortgage',
  },
];

interface IFormFirmInformation {
  formData: any;
  dispatch: any;
  onSubmit?: any;
  hideButton?: boolean;
  classes?: any;
}

@withStyles(styles)
export class FormCommissionInformationMenu extends Component<IFormFirmInformation> {
  isInitValid = false;
  isButtonLoading = false;

  renderChildrenCommissionTypes = () =>
    getTypesCommission.map((item) => (
      <div key={item.id} className={classnames(this.props.classes.card)}>
        <div className={classnames(this.props.classes.content)}>
          <Icon name={item.icon} className={classnames(this.props.classes.iconSize)} />
          <Typography variant="body1" className={classnames(this.props.classes.label)}>
            {item.label}
          </Typography>
        </div>
      </div>
    ));

  render() {
    const { formData, onSubmit, dispatch, hideButton, classes } = this.props;
    return (
      <FormApp
        initialValues={{}}
        isInitValid={this.isInitValid}
        validationSchema={null}
        onSubmit={onSubmit}
        buttonLabel={'Continue'}
        dataTestId="continueButton"
        isLoading={this.isButtonLoading}
        isInQuestionnaire
        dispatch={dispatch}
        progressBar={formData.app.metadata.progressBar}
        notDisabled={true}
        hideButton={hideButton}
        alignButton={classnames(classes.alignButton)}
      >
        {() => {
          return (
            <>
              <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '1em' }}>
                {this.renderChildrenCommissionTypes()}
              </div>
            </>
          );
        }}
      </FormApp>
    );
  }
}
