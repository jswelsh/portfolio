import './App.css';
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
  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/*<div className="App"></div>*/}
      <Router>
      <NavBar
        darkState={darkState}
        handleThemeChange={handleThemeChange}
      />
        <Projects 
          darkState={darkState}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
