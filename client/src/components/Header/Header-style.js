import { makeStyles } from '@material-ui/core/styles';

export const useStylesHeader = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#000000',
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  midSection: {
    marginLeft: theme.spacing(20),
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  rightSection: {
    edge: 'end',
    justifySelf: 'flex-end',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    marginLeft: theme.spacing(2),
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
      color: theme.palette.warning.main
    }
  },
  icon: {
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
      color: theme.palette.warning.main
    }
  },
  count: {
    position: 'absolute',
    top: 4,
    right: -8,
    backgroundColor: '#fe8732',
    color: 'white',
    borderRadius: '50%',
    width: 18,
    height: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
}));