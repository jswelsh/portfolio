import { Chip, ListItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function TechChip({}) {
  
  const classes = useStyles();

  return (<ListItem>
    <Chip 
      //icon={icon}
      //label={data.label}
      label='React' 
      className={classes.chip} />
    </ListItem>
  );
}

export { TechChip }