import { Chip,SvgIcon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@mdi/react'


const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
  chippy: {
    padding: '1px',
  },
}));

function TechChip({
  label,
  icon,
  svg,
  svgAlt
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
    : svg !== null ?
    <Chip
      icon={
      <SvgIcon viewBox={svg.viewBox}>
        <path d={svg.path}/>
      </SvgIcon>}
      key={label}
      color="primary"
      label={label} 
      className={classes.chip}/>
    : <Chip
    icon={svgAlt()}
    key={label}
    color="primary"
    label={label} 
    className={classes.chip}/>
    )
  );
}

export { TechChip }
