
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Toolbar, AppBar } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));

const NavBar = ({
  darkState,
  handleThemeChange
}) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">
          James Welsh
        </Typography>
        <div className={classes.toolbarButtons}>
          <IconButton onClick={() => handleThemeChange()}>
            {darkState ? <Brightness4Icon/> : <Brightness7Icon/>}
          </IconButton>
          <IconButton>
            <GitHubIcon 
              fontSize={'large'} 
              onClick={() =>  window.location.href='https://github.com/jswelsh'}/>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}


export { NavBar }