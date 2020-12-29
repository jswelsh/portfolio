import { GitHub } from "@material-ui/icons"
import curExCLight from './curExCLight.jpg'
import curExCDark from './curExCDark.jpg'
import mapAndChartsLight from './mapAndChartsLight.jpg'
import mapAndChartsDark from './mapAndChartsDark.jpg'
import transLinkLight from './transLinkLight.jpg'
import transLinkDark from './transLinkDark.jpg'
import jungleLight from './jungleLight.jpg'
import jungleDark from './jungleDark.jpg'
import never86Light from './never86Light.jpg'
import never86Dark from './never86Dark.jpg'
import schedulerLight from './schedulerLight.jpg'
import schedulerDark from './schedulerDark.jpg'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { 
  mdiLanguageRubyOnRails,
  mdiLanguageTypescript,
  mdiLanguageJavascript,
  mdiAlphaKBoxOutline,
  mdiChartLineVariant,
  mdiCreditCardCheck,
  mdiDatabaseSearch,
  mdiSwapHorizontal,
  mdiLanguageHtml5,
  mdiCalendarRange,
  mdiLanguageRuby,
  mdiLanguageCss3,
  mdiMaterialUi,
  mdiNodejs,
  mdiMapbox,
  mdiReact,
} from '@mdi/js';

let activeRecords, amCharts, axios, css, dateIO, express, html, js, jest, keras, mapBox, mui, psql, rails, react, ruby, scss, storyBook, stripe, tf, ts
activeRecords = {
  label : 'ActiveRecords',
  icon: mdiLanguageRubyOnRails
}
amCharts = {
  label:'amCharts',
  icon: mdiChartLineVariant
}
axios = {
  label:'axios',
  icon: mdiSwapHorizontal
}
css = {
  label:'css',
  icon: mdiLanguageCss3,
}
dateIO = {
  label:'date-io',
  icon: mdiCalendarRange
}
express = {
  label: 'Express',
  icon: mdiNodejs
}
html = {
  label: 'HTML5',
  icon: mdiLanguageHtml5
}
js = {
  label:'Javascript',
  icon: mdiLanguageJavascript,
}
jest = {
  label: 'Jest',
  icon: null,/* mdiAlphaJCircleOutline */
  svg: {
    path:"M29.667 15.76a4.155 4.155 0 0 0-3.104-4.015L30.547 0h-19.74l3.996 11.787a4.156 4.156 0 0 0-2.996 3.979c0 1.391.693 2.625 1.751 3.385a10.813 10.813 0 0 1-1.443 1.656a10.92 10.92 0 0 1-3.401 2.199c-1.115-.751-1.593-2.079-1.161-3.26c4.531-1.412 3.531-8.089-1.208-8.109a4.154 4.154 0 0 0-4.151 4.151c0 1.131.457 2.167 1.203 2.911c-.068.125-.131.261-.199.396c-.619 1.281-1.323 2.724-1.593 4.344c-.536 3.245.344 5.849 2.469 7.323a6.778 6.778 0 0 0 3.927 1.24c2.432 0 4.907-1.224 7.297-2.412c1.708-.839 3.468-1.719 5.197-2.145c.641-.156 1.308-.249 2.011-.355c1.427-.203 2.901-.416 4.224-1.187a5.966 5.966 0 0 0 2.911-4.12a6.144 6.144 0 0 0-.593-3.828c.401-.641.62-1.385.62-2.193zm-1.807 0a2.336 2.336 0 0 1-2.333 2.333c-2.209-.005-3.177-2.791-1.444-4.167l.005-.009c.079-.057.163-.115.24-.168c0 0 .016 0 .016-.009c.036-.021.072-.047.109-.068c.011 0 .016-.005.025-.005c.037-.021.084-.036.131-.057s.093-.036.131-.057c.009 0 .015-.005.025-.005c.037-.011.079-.031.115-.036c.005 0 .027-.011.037-.011c.047-.011.083-.021.129-.027h.005l.141-.031c.009 0 .025 0 .036-.011c.036 0 .073-.011.115-.011h.041c.047 0 .093-.005.151-.005h.12c.037 0 .068 0 .104.005h.016c.073.011.151.021.224.043a2.347 2.347 0 0 1 1.86 2.296zM13.391 1.855h14.573l-3.344 9.864c-.141.027-.276.073-.417.12l-3.52-7.177l-3.532 7.131a3.367 3.367 0 0 0-.437-.099zm6.625 13.098a4.117 4.117 0 0 0-1.251-2.224l1.917-3.869l1.937 3.952a4.151 4.151 0 0 0-1.161 2.141zm-4.641-1.464a.845.845 0 0 1 .131-.025h.025c.037-.011.073-.011.109-.021h.037c.036 0 .068-.011.104-.011h.359c.037 0 .068.011.095.011c.02 0 .025 0 .047.011c.036.011.063.011.099.016c.011 0 .021 0 .041.009l.125.027h.011c.036.011.079.021.115.041c.005 0 .016.005.036.005c.027.011.063.021.095.036c.004 0 .015.011.025.011c.036.021.073.032.109.047h.011a.425.425 0 0 1 .12.068h.011c.036.016.072.041.109.063c.009 0 .009.011.02.011c.037.016.063.047.099.063l.011.011c.109.083.213.176.319.271l.004.005c.417.437.647 1.015.641 1.613c-.099 3.011-4.568 3.011-4.667 0c-.005-1.067.724-2 1.76-2.26zm-9.12-.068a2.336 2.336 0 0 1 0 4.672c-1.285 0-2.333-1.047-2.333-2.333s1.048-2.339 2.333-2.339zm21.552 8.038a4.114 4.114 0 0 1-2.009 2.844c-1.011.583-2.256.771-3.557.952a22.36 22.36 0 0 0-2.188.391c-1.927.475-3.781 1.396-5.579 2.287c-2.296 1.141-4.463 2.213-6.473 2.213a4.873 4.873 0 0 1-2.875-.916c-2.037-1.407-1.937-4.047-1.693-5.495c.219-1.355.839-2.62 1.432-3.833c.043-.073.068-.141.105-.213c.203.072.416.129.64.167c-.355 1.963.645 3.995 2.593 4.995l.349.181l.38-.135c1.62-.579 3.125-1.511 4.448-2.76a12.28 12.28 0 0 0 1.927-2.292a4.157 4.157 0 0 0 4.652-3.057h1.557a4.143 4.143 0 0 0 4.011 3.104c.771 0 1.484-.213 2.093-.573c.24.693.317 1.417.187 2.141z",
    viewBox: "-4 -6 42 42"
  }
}
keras = {
  label: 'Keras',
  icon: mdiAlphaKBoxOutline
}
mapBox = {
  label: 'Mapbox',
  icon: mdiMapbox
}
mui = {
  label: 'Material UI', 
  icon: null,/* mdiMaterialUi */
  svg:{
    path: "M0 2.475v10.39l3 1.733V7.67l6 3.465l6-3.465v3.465l-6 3.463v3.464l6 3.463l9-5.195V9.402l-3 1.733v3.463l-6 3.464l-3-1.732l6-3.465V2.475L9 7.67L0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474z",
    viewBox: "-4 -4 30 30"
  }
}
psql = {
  label: 'PostgreSQL', 
  icon: mdiDatabaseSearch 
}
rails = {
  label: 'Rails',
  icon: mdiLanguageRubyOnRails
}
react = {
  label:'React',
  icon: mdiReact
}
ruby = {
  label:'Ruby',
  icon: mdiLanguageRuby
}
scss = {
  label: 'SCSS',
  icon:null,
  svg: {
    path:"M24.782 7.992c-.634-2.486-4.757-3.3-8.659-1.918a19.605 19.605 0 0 0-6.644 3.811c-2.149 2.01-2.492 3.76-2.351 4.491c.5 2.58 4.033 4.266 5.486 5.517v.007c-.428.211-3.564 1.8-4.3 3.42c-.774 1.712.123 2.94.718 3.105A4.4 4.4 0 0 0 13.78 24.5a4.824 4.824 0 0 0 .472-4.288a5.639 5.639 0 0 1 2.143-.123c2.456.287 2.938 1.82 2.846 2.462a1.62 1.62 0 0 1-.779 1.1c-.172.107-.225.143-.21.223c.021.115.1.111.247.086a1.915 1.915 0 0 0 1.336-1.707c.059-1.5-1.382-3.186-3.934-3.143a6.736 6.736 0 0 0-2.189.3a5.844 5.844 0 0 0-.108-.12c-1.578-1.683-4.494-2.874-4.371-5.137c.045-.823.331-2.989 5.6-5.617c4.32-2.153 7.778-1.56 8.376-.247c.854 1.876-1.848 5.361-6.334 5.864a3.37 3.37 0 0 1-2.833-.718c-.236-.26-.271-.271-.359-.223c-.143.079-.052.309 0 .445a2.659 2.659 0 0 0 1.621 1.274a8.592 8.592 0 0 0 5.258-.52c2.721-1.049 4.843-3.974 4.22-6.419zM13.218 20.663a3.584 3.584 0 0 1-.029 2.092q-.035.106-.077.21t-.091.2a3.911 3.911 0 0 1-.647.943c-.813.887-1.95 1.223-2.437.94c-.526-.305-.263-1.556.68-2.553a9.478 9.478 0 0 1 2.474-1.762z",
    viewBox: '0 0 32 32'
  }
}
storyBook = {
  label:'Storybook',
  icon: null,/* mdiAlphaSBoxOutline */
  svg:{
    path: "M21.786.318l-.161 3.615c-.005.203.229.328.391.203l1.411-1.068L24.625 4A.24.24 0 0 0 25 3.812L24.865.135L26.641 0a1.602 1.602 0 0 1 1.708 1.599v28.802A1.6 1.6 0 0 1 26.667 32l-21.469-.958a1.6 1.6 0 0 1-1.531-1.547l-1-26.401a1.596 1.596 0 0 1 1.505-1.693L21.771.292zm-4.093 12.083c0 .625 4.214.318 4.786-.109c0-4.266-2.292-6.521-6.479-6.521c-4.198 0-6.531 2.297-6.531 5.724c0 5.932 8 6.036 8 9.276c0 .938-.427 1.469-1.401 1.469c-1.281 0-1.802-.651-1.734-2.88c0-.479-4.865-.641-5.026 0c-.359 5.375 2.974 6.932 6.797 6.932c3.724 0 6.63-1.984 6.63-5.573c0-6.359-8.135-6.188-8.135-9.333c0-1.292.964-1.464 1.505-1.464c.604 0 1.667.094 1.589 2.49z",
    viewBox: '-4 -4 40 40'
  }
}
stripe = {
  label: 'Stripe',
  icon: mdiCreditCardCheck
}
tf = {
  label: 'TensorFlow',
  icon: null,
  svg: {
    path: "M26.135 16l.13 6.266l-4.13-2.401v8.938l-5.469 3.198v-32l13.599 7.865v7.068l-8.13-4.797v3.599zM1.734 7.865L15.333 0v32l-5.469-3.198V10.135l-8.13 4.797z" ,
    viewBox: '-4 -6 42 42'
  }
}
ts = {
  label: 'TypeScript',
  icon: mdiLanguageTypescript
}

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
    image: {
      light:curExCLight,
      dark:curExCDark
    },
    technologies: [
      {...react},
      {...mui},
      {...amCharts},
      {...axios},
      {...dateIO},
      {...ts},
    ],
  }, {
    header: 'Maps and Charts sandbox',
    demo: 'https://amchartssandbox.web.app/',
    repo: 'https://github.com/jswelsh/MapsAndChartsSandbox',
    image: {
      light: mapAndChartsLight,
      dark: mapAndChartsDark
    },
    technologies: [
      {...amCharts},
      {...mapBox},
      {...mui},
      {...react},
      {...js},
      {...html},
      {...css}
    ], 
  }, {
    header: 'TransLink',
    demo: 'https://agitated-galileo-f1090b.netlify.app/',
    repo: 'https://github.com/jswelsh/translinkGraph',
    image: {
      light: transLinkLight,
      dark: transLinkDark
    },
    technologies: [
      {...html}, 
      {...js}
    ],
  }, {
    header: 'Jungle',
    demo: null,
    repo: 'https://github.com/jswelsh/jungle',
    image: {
      light: jungleLight,
      dark: jungleDark
    },
    technologies: [
      {...activeRecords},
      {...psql},
      {...stripe},
      {...rails},
      {...ruby},
    ], 
  }, {
    header: 'Scheduler',
    demo: null,
    repo: 'https://github.com/jswelsh/scheduler',
    image: {
      light: schedulerLight,
      dark: schedulerDark
    },
    technologies: [
      {...react}, 
      {...axios}, 
      {...scss}, 
      {...storyBook}, 
      {...jest}, 
      {...express}
    ], 
  }, {
    header: "Never86",
    demo: null,
    repo: 'https://github.com/jswelsh/never86',
    image: {
      light: never86Light,
      dark: never86Dark
    },
    technologies: [
      {...ruby}, 
      {...rails},
      {...activeRecords},
      {...keras},
      {...tf}
    ], 
  }
/*, {
    header: null,
    demo: null,
    repo: 'https://github.com/jswelsh/translinkGraph',
    image: null,
    technologies: [
      {},
    ], 
  } */

  
];
export { links, projects }