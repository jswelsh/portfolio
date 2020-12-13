import { Chip } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@mdi/react'


const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function TechChip({label, icon}) {
  
  const classes = useStyles();

  return (
    <Chip 
      icon={<Icon size={.80} path={icon} />}
      key={label}
      color="primary"
      label={label} 
      className={classes.chip}/>
  );
}

export { TechChip }