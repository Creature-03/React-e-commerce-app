import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#EFFDFF',
    padding: theme.spacing(10),
  },
  root: {
    flexGrow: 1,
  },
}));