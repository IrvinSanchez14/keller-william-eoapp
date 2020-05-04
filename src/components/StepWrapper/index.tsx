import { Component, ReactNode } from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';

import MainContentWrapper from '../MainContentWrapper';
import { IAppStoreProps } from 'src/typesInterface/IAppStoreProps';
import { withStyles, WithStyles } from 'src/styles/FormStyle/css/withStyles';

import { styles } from './styles';
import { Row } from '../LayoutWrapper/Flex';
import { Icon } from '../Icon';

interface IStepWrapper extends IAppStoreProps, WithStyles<typeof styles> {
  heading: string;
  subHeading?: string[];
  content?: string;
  bottomContent?: string;
  avatarText?: string;
  isAgent?: boolean;
  contentIcon?: ReactNode;
}

@withStyles(styles)
export class StepWrapper extends Component<IStepWrapper> {
  render() {
    const {
      classes,
      avatarText,
      heading,
      subHeading,
      content,
      bottomContent,
      children,
      property,
      contentIcon,
      stepper,
    } = this.props;

    const copyStepper = {
      isAgentType: false,
    };

    return (
      <MainContentWrapper
        className={classnames(classes.stepContainer, { [classes.hidden]: false })}
        infoContent={() => (
          <>
            {copyStepper.isAgentType ? (
              <Row className={classnames(classes.stepInfoBadge, classes.stepInfoAgentBadge)}>
                <p>Agent</p>
              </Row>
            ) : (
              <Row className={classnames(classes.stepInfoBadge, classes.stepInfoKaceyBadge)}>
                <Icon name="dog" className={classes.stepInfoDogAvatar} />
                {avatarText && <p className={classes.stepInfoAvatarText}>{avatarText}</p>}
              </Row>
            )}
            <Typography
              className={classes.stepInfoHeader}
              gutterBottom
              variant="h1"
              data-test-id="header"
            >
              {heading}
            </Typography>
            {subHeading?.length &&
              subHeading.map((heading, index) => (
                <Typography
                  key={index}
                  className={classnames(classes.stepInfoHeader, classes.subHeading)}
                  gutterBottom
                  data-test-id="subheader"
                >
                  {heading}
                </Typography>
              ))}
            {content && (
              <Typography className={classes.stepInfoContent} gutterBottom variant="subtitle1">
                {content}
                {contentIcon}
              </Typography>
            )}
            {bottomContent && (
              <Typography className={classes.bottomContent}>{bottomContent}</Typography>
            )}
          </>
        )}
        formContent={() => children}
      />
    );
  }
}

export default StepWrapper;
