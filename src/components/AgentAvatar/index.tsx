import classnames from 'classnames';
import { Typography } from '@material-ui/core';

import { Row, Column } from '../LayoutWrapper/Flex';
import { AwesomeFontIcon } from '../AwesomeFontIcon';
import kwLogoRed from 'assets/images/logos/KWLogoRed.png';

import { useStyles } from './styles';

interface AgentAvatarProps {
  responsiveSizes?: Array<number>;
  isConfirmation?: boolean;
  showOnlyImg?: boolean;
  isInline?: boolean;
  avatar?: string;
}

function AgentAvatar(Props: AgentAvatarProps) {
  /*const {responsiveSizes = [60, 80], isConfirmation = false, showOnlyImg = false, isInline, avatar} = Props;

  const {
    agent: {
      chosenAgent: {firstname, lastname, email, mobile_phone, photo},
    },
    session: {sendFormGAEvent},
    stepper: {isCurrBitingHistoryView},
  } = useStores();
  const photoSrc = !!photo ? photo : kwLogoRed;

  const onSocialClick = (actionType: string) => () => {
    /*if (!isConfirmation) {
      sendFormGAEvent(actionType, {isCurrBitingHistoryView});
    }
  };

  const classes = useStyles({responsiveSizes, isConfirmation, isInline, avatar, photo: photoSrc});
  return (
    <Row align={showOnlyImg && !isInline && 'center'} className={classes.wrapper}>
      <div className={classes.avatar} />
      {!showOnlyImg && (
        <>
          <Column valign="center" margin="0 0 0 25px" className={classes.nameContainer}>
            <p className={classnames(classes.caption, classes.captionDesktop)}>
              Connect for answers about your home
            </p>
            <p className={classnames(classes.caption, classes.captionMobile)}>Home questions?</p>
            <Typography
              data-test-id="agentName"
              className={classes.name}
            >{`${firstname} ${lastname}`}</Typography>
          </Column>
          {!isConfirmation && (
            <>
              <div className={classes.iconsDesktopContainer}>
                {!!email && (
                  <a
                    href={`mailto:${email}`}
                    onClick={onSocialClick('agentEmail')}
                    className={classnames(classes.icon, classes.emailIcon)}
                  >
                    <AwesomeFontIcon name="faEnvelopeOpenText" type="regular" />
                  </a>
                )}
                {!!mobile_phone && (
                  <a
                    href={`tel:${mobile_phone}`}
                    onClick={onSocialClick('agentPhone')}
                    className={classes.icon}
                  >
                    <AwesomeFontIcon name="faPhone" type="regular" />
                  </a>
                )}
              </div>
              {!!mobile_phone && (
                <div className={classes.iconsMobileContainer}>
                  <a href={`sms:${mobile_phone}`} className={classes.icon}>
                    <AwesomeFontIcon name="faComment" type="regular" />
                  </a>
                </div>
              )}
            </>
          )}
        </>
      )}
    </Row>
  );*/
}

export default AgentAvatar;
