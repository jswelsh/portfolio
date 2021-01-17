import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { CardHeader, Card, CardContent, Button } from "@material-ui/core";
import { TechChip } from './TechChip'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    borderRadius: '2%',
    flexDirection: 'column',
    transition: "0.3s ease-out",
    boxShadow: "0 8px 30px -12px rgba(0,0,0,0.3)",
  }, 
  cardLight: {
    "&:hover": {
      transform: "translateY(-5px) scale(1.005) translateZ(0)",
      boxShadow: "0 16px 60px -12.125px rgba(60, 138, 252, 0.9)",
    }
  },
  cardDark: {
    "&:hover": {
      transform: "translateY(-5px) scale(1.005) translateZ(0)",
      boxShadow: "0 16px 60px -12.125px #8e24aa",
    }
  },
  cardContent: {
    flexGrow: 1,
  },
  Button:{
    margin:5
  }
}));

function ProjectCard({
  darkState,
  technologies,
  header,
  image,
  demo,
  repo
}) {
  const classes = useStyles({darkState:darkState});
  console.log(darkState)
  return (
    <Card className={clsx(darkState ? classes.cardDark : classes.cardLight, classes.card)}>
      <CardHeader
        title={header}
        titleTypographyProps={{
          align: 'left',
          variant: "h5"
        }}
        action={
        <>
        {
        demo
        ? <Button
            className={classes.Button}
            size="large"
            color="primary"
            variant="contained"
            target="_blank"
            href={demo}>
            Demo
          </Button>
        : null
        }
          <Button 
            className={classes.Button}
            size="large"
            color="secondary"
            variant="outlined"
            target="_blank"
            href={repo}>
            Repo
          </Button>
        </>}
      />
      {image(darkState)}
      <CardContent className={classes.cardContent}>
        {technologies.map(technology =>
        <TechChip 
          icon={technology.icon}
          label={technology.label}
          svg={technology.svg}
          svgAlt={technology.svgAlt}
          />)}
      </CardContent>
    </Card>);
    }
export { ProjectCard }