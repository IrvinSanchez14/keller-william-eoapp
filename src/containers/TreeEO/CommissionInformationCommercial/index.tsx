import { Component } from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { Typography } from '@material-ui/core';

import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { setInformationPage } from 'src/store/actions/app';
import StepWrapper from 'src/components/StepWrapper';

import { withStyles } from 'src/styles/FormStyle/css/withStyles';
import { styles } from './styles';
import { categoriesName } from 'src/helpers/constants';
import { FormCommissionInformationCommercial } from './form';

type FullNameProps = IAppStoreProps;

type FormFields = {
  contactName: string;
  brokerName: string;
  kwMarketCenterName: string;
  yearEstablished: number;
};

@withStyles(styles)
export class CommissionInformationCommercial extends Component<FullNameProps> {
  isInitValid = false;
  isButtonLoading = false;

  async componentDidMount() {
    const { dispatch } = this.props;
    const { formData } = this.props;
    if (!isEmpty(formData.app.data)) {
    }
    setInformationPage(dispatch, 13, categoriesName.commission);
  }

  render() {
    const isLoading = false;
    const { formData, classes, dispatch } = this.props;
    return (
      !isLoading && (
        <StepWrapper
          avatarText={this.props.intl.get('app.avata.text.commission.part.four')}
          heading={this.props.intl.get('app.head.form.commission.part.five')}
          bottomContent={this.props.intl.get('app.link.commission.part.four')}
          classHeader={classnames(classes.stepHeader)}
          classBottom={classnames(classes.stepBottom)}
        >
          <Typography className={classnames(classes.titleForm)}>{'Commercial'}</Typography>
          <FormCommissionInformationCommercial
            formData={formData}
            dispatch={dispatch}
            onSubmit={null}
            hideButton={false}
          />
        </StepWrapper>
      )
    );
  }
}
