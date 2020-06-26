import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
  list: {
    maxHeight: 600,
    width: '100%',
    overflowY: 'auto',
    zIndex: 2,
    position: 'absolute',
    marginTop: 8,
  },
}));
