import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';

import { useState } from "react";
import { blue, lightBlue, purple } from "@material-ui/core/colors";
import { NavBar } from './NavBar'
import { Projects } from './Projects'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center'
  },

}));

function App() {
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
      <Router>
        <NavBar
          darkState={darkState}
          handleThemeChange={handleThemeChange}
        />
        <Switch>
          <Route path='/projects'>
            <Projects 
              darkState={darkState}/>
          </Route>
          <Route path='/'>
            <p>
              'hi'
              </p>
          </Route>
        </Switch>
      </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
