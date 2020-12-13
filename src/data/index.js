import { GitHub } from "@material-ui/icons";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { 
  mdiLanguageTypescript, 
  mdiLanguageJavascript,
  mdiLanguageHtml5,
  mdiChartLineVariant,
  mdiCalendarRange,
  mdiSwapHorizontal,
  mdiLanguageCss3,
  mdiMaterialUi, 
  mdiReact,
 } from '@mdi/js';

import {  } from '@mdi/js';


const links = [
  {
    label: 'Github',
    link: 'https://github.com/jswelsh',
    icon: <GitHub />
  },
  {
    label: 'Email',
    link: 'mailto:james.sinclair.welsh@gmail.com',
    icon: <MailOutlineIcon/>
  }
]

const projects = [
  {
    header: 'CurExC',
    demo: 'https://curexc.web.app/',
    repo: 'https://github.com/jswelsh/currency_converter_v1',
    technologies: [
      {
        label:'React',
        icon: mdiReact
      }, {
        label: 'Material UI', 
        icon: mdiMaterialUi
      }, {
        label:'TypeScript',
        icon: mdiLanguageTypescript
      }, {
        label:'amCharts',
        icon: mdiChartLineVariant
      }, {
        label:'date-io',
        icon: mdiCalendarRange
      }, {
        label:'axios',
        icon: mdiSwapHorizontal
      }
    ],
    image: null
  }, {
    header: 'TransLink',
    demo: 'https://agitated-galileo-f1090b.netlify.app/',
    repo: 'https://github.com/jswelsh/translinkGraph',
    technologies: [
      {
        label:'Javascript',
        icon: mdiLanguageJavascript,
      }, {
        label: 'HTML5', 
        icon: mdiLanguageHtml5  
      }
    ],
    image: null
  }
];
export { links, projects }