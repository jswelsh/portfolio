import { makeStyles } from '@material-ui/core/styles';
import { ProjectCard } from './ProjectCard'
import { HeroContent } from './HeroContent'


import { Container, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

function Main({
  projects
}) {
  const classes = useStyles();

  return (<main>
    {/* Hero unit */}
    <HeroContent />
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {projects.map(project => <Grid item key={project} xs={12} sm={6} md={4}>
            <ProjectCard />
          </Grid>)}
      </Grid>
    </Container>
  </main>);
}

export { Main }