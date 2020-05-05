import classnames from 'classnames';

import { WithStyles } from 'src/styles/FormStyle/css/withStyles';
import { Column, Row } from 'src/components/LayoutWrapper/Flex';
import { useStyles } from './style';

interface IMainContentWrapper extends WithStyles<typeof useStyles> {
  infoContent: any;
  formContent: any;
  className?: string;
  contentPapersClasses?: string;
}

function MainContentWrapper(Props: IMainContentWrapper) {
  const { infoContent, formContent, className, contentPapersClasses } = Props;
  const classes = useStyles({});
  return (
    <Row className={classnames(classes.wrapper, className)}>
      <Column
        className={classnames(classes.basicContainer, classes.infoContainer, contentPapersClasses)}
      >
        {infoContent()}
      </Column>
      <Column
        className={classnames(classes.basicContainer, classes.formContainer, contentPapersClasses)}
      >
        {formContent()}
      </Column>
    </Row>
  );
}

export default MainContentWrapper;
