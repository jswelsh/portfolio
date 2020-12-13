import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, Toolbar, Grid, AppBar } from "@material-ui/core";
import { blue, lightBlue, purple } from "@material-ui/core/colors";
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { Main } from './Main'
import { Footer } from "./Footer";



export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));

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
              <IconButton>
                <GitHubIcon 
                  fontSize={'large'} 
                  onClick={() =>  window.location.href='https://github.com/jswelsh'}/>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
          <Main/>
        {/* Footer */}
          <Footer />
        {/* End footer */}
        </div>
    </ThemeProvider>
  );
}


export { Projects }