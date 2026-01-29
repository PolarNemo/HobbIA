
export default {
  basePath: 'https://PolarNemo.github.io/HobbIA',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
