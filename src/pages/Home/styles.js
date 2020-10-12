import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.background.paper,
    borderRadius: 6,
  },
  mb: {
    marginBottom: 20,
  },
  mr: {
    marginRight: 5,
  },
  button: {
    margin: '20px 0 10px',
  },
  loading: {
    margin: 50,
  },
  link: {
    '&:hover': {
      color: 'red',
    },
  },
  img: {
    background: '#EEE'
  }
}));

export default useStyles;
