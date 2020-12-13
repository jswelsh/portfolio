import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Link, Typography, Toolbar, Grid, AppBar } from "@material-ui/core";
import { blue, lightBlue, purple } from "@material-ui/core/colors";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { Main } from './Main'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    padding: theme.spacing(6),
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));

const projects = [1, 2, 3];

const Projects = () => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light"; 
  const mainPrimaryColor = darkState ? purple[600] : blue[500];
  const mainSecondaryColor = darkState ? purple[200] : lightBlue[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      },
      textPrimary:{
        main:'#000'
      },
    }
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
{/*         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h5" color="inherit" /* noWrap */>
              James Welsh
            </Typography>
            <div className={classes.toolbarButtons}>
              <IconButton onClick={() => handleThemeChange()}>
                {darkState ? <Brightness4Icon/> : <Brightness7Icon/>}
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
          <Main   
          projects={projects}/>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            James Welsh
          </Typography>
          <Typography variant="subtitle1" align="center" component="p">
            Living the dream!
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
        </div>
    </ThemeProvider>
  );
}


export { Projects }