import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useAppContext } from 'src/store';
import { MuiTheme } from 'src/styles/FormStyle/css/IMuiThemeOptions';

import { FormFirmInformation } from 'src/containers/TreeEO/FirmInformation/form';
import { Row, Column } from 'src/components/LayoutWrapper/Flex';

const useStyles = makeStyles((theme: MuiTheme) => ({
  titleForm: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '1.0em',
    [theme.breakpoints.up(768)]: {
      fontSize: 22,
      marginBottom: '0.7em',
    },
  },
}));

export function EditPageFirmInformation() {
  const { dispatch, state } = useAppContext();
  const classes = useStyles();
  return (
    <>
      <Column>
        <Typography className={classnames(classes.titleForm)}>{'Basic Information'}</Typography>
        <FormFirmInformation formData={state} dispatch={dispatch} hideButton={true} />
      </Column>
    </>
  );
}
