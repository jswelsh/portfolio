import { makeStyles } from '@material-ui/core/styles';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const useStyles = makeStyles((theme) => ({
  LanguageGraph: {
    margin:'auto',
    width: "100%", 
    height: 660,
  },
  }));

function LanguageGraph({

}) {
  const classes = useStyles();

  am4core.useTheme(am4themes_animated);
  var chart = am4core.create("chartdiv", am4charts.PieChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  chart.data = [

      {
      language: "TypeScript",
      value: 137.9
    },
    {
      language: "HTML",
      value: 116.4
    },
    {
      language: "Ruby",
      value: 89
    },
    {
      language: "CSS",
      value: 106.5
    },
    {
      language: "JavaScript",
      value: 270
    },
    
  ];

  chart.radius = am4core.percent(70);
  chart.innerRadius = am4core.percent(24);
/*   chart.startAngle = 310;
  chart.endAngle = 130;   */
  chart.startAngle = 360;
  chart.endAngle = 180;  


  var series = chart.series.push(new am4charts.PieSeries());
  series.dataFields.value = "value";
  series.dataFields.category = "language";
  // series.labels.template.bent = true;
  // series.labels.template.radius = 10;
  series.alignLabels = false;

  series.labels.template.text = "{language} \r\n {value}: Files"
  // series.labels.template.relativeRotation = 90;
  series.labels.template.radius = -120
  series.labels.template.padding(2, 2, 2, 2);
  series.ticks.template.disabled = true;
  series.labels.template.fill = am4core.color("#fff");
  // series.labels.template.maxWidth = 10;
  series.labels.template.relativeRotation = 90;

  // series.labels.template.wrap = true;

  series.slices.template.cornerRadius = 10;
  series.slices.template.innerCornerRadius = 7;
  series.slices.template.draggable = false;
  series.slices.template.inert = true;

  series.hiddenState.properties.startAngle = 90;
  series.hiddenState.properties.endAngle = 90;

  return (
    <div id="chartdiv"  className={classes.LanguageGraph}></div>
  )}

  export { LanguageGraph }