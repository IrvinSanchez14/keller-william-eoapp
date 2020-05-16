import classnames from 'classnames';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

import { useAppContext } from 'src/store';
import { WithStyles } from 'src/styles/FormStyle/css/withStyles';
import { Column, Row } from 'src/components/LayoutWrapper/Flex';
import { useStyles } from './style';

interface IMainContentWrapper extends WithStyles<typeof useStyles> {
  infoContent: any;
  formContent: any;
  className?: string;
  contentPapersClasses?: string;
}

const BorderLinearProgress = withStyles({
  root: {
    borderRadius: '9px',
    height: '15px',
    backgroundColor: '#e2e2e2',
    width: '100%',
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#0070f3',
  },
})(LinearProgress);

function MainContentWrapper(Props: IMainContentWrapper) {
  const { infoContent, formContent, className, contentPapersClasses } = Props;
  const { state } = useAppContext();
  const classes = useStyles(state);
  return (
    <>
      <Row className={classnames(classes.wrapper, className)}>
        <div className={classnames(classes.divPercentage)}>
          <p className={classnames(classes.percentage)}>
            {parseInt(`${state.app.metadata.progressBar}`)}%
          </p>
        </div>
        <Row className={classnames(classes.progressBar)}>
          <BorderLinearProgress
            variant="determinate"
            color="secondary"
            value={state.app.metadata.progressBar}
          />
        </Row>
        <div className={classnames(classes.divContainerBody)}>
          <Column
            className={classnames(
              classes.basicContainer,
              classes.infoContainer,
              contentPapersClasses,
            )}
          >
            {infoContent()}
          </Column>
          <Column
            className={classnames(
              classes.basicContainer,
              classes.formContainer,
              contentPapersClasses,
            )}
          >
            {formContent()}
          </Column>
        </div>
      </Row>
    </>
  );
}

export default MainContentWrapper;
