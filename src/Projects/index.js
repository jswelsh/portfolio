import { makeStyles } from '@material-ui/core/styles';
import { ProjectCard } from './ProjectCard'
import { HeroContent } from './HeroContent'
import { Container, Grid } from "@material-ui/core";


import { projects } from './../data'
import { Footer } from "./Footer";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  root: {
    flexGrow:1
  },
}));


const Projects = ({

}) => {
  const classes = useStyles();
  return (
    <>
      <main className={classes.root}>
        {/* Hero unit */}
        <HeroContent />
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid 
            container 
            justify="center"
            spacing={4}>
            {projects.map((project) =>
            <Grid
              item
              key={project.header}
              xs={12}
              sm={12}
              md={6}
              lg={6}>
              <ProjectCard 
                technologies={project.technologies}
                header={project.header}
                image={project.image}
                demo={project.demo}
                repo={project.repo}/>
            </Grid>)}
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}


export { Projects }