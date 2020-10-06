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
}));

export default useStyles;
