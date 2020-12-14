import { Chip, Avatar,SvgIcon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@mdi/react'


const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function TechChip({
  label, 
  icon,
  svg
}) {
  
  const classes = useStyles();
  if( icon === null ){
  }
  return (
    (
    icon !== null ? 
    <Chip 
      icon={<Icon size={.80} path={icon} />}
      key={label}
      color="primary"
      label={label} 
      className={classes.chip}/>
    : 
    <Chip 
      icon={
      <SvgIcon viewBox={svg.viewBox}>
        <path d={svg.path}/>
      </SvgIcon>}
      key={label}
      color="primary"
      label={label} 
      className={classes.chip}/>
    )    
  );
}

export { TechChip }
