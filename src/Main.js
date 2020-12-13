import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { FormControlLabel, Switch } from "@material-ui/core";
import { blue, deepPurple, lightBlue, purple, teal } from "@material-ui/core/colors";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

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
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));

const projects = [1, 2, 3];

const Main = () => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light"; 
  const mainPrimaryColor = darkState ? purple[600] : lightBlue[500];
  const mainSecondaryColor = darkState ? purple[200] : blue[500];
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
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" /* noWrap */>
            James Welsh
          </Typography>
          <div className={classes.toolbarButtons}>
{/*             <FormControlLabel 
            value="dark_mode"
            label="Dark Mode"
            control={<Switch
              checked={darkState} 
              onChange={handleThemeChange} 
              />}
            labelPlacement="start"
            /> */}
            <IconButton onClick={() => handleThemeChange()}>
              {darkState ? <Brightness4Icon/> : <Brightness7Icon/>}
            </IconButton>
            </div>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              My Projects
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A curated collection of my current projects, the scope of which ranges from small instances of functionality to comprehensive full fledge applications.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>

                  <Button 
                  variant="contained" 
                  color="primary"
                  href="https://resume.creddle.io/resume/du4st9n0u9e"
                  >
                    Resume
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Contact
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projects.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="secondary" variant="outlined">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          James Welsh
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Living the dream!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
      </div>
      </ThemeProvider>
    </>
  );
}


export { Main }