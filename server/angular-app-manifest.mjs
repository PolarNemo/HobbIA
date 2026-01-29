
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://PolarNemo.github.io/HobbIA',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/HobbIA/login",
    "route": "/HobbIA"
  },
  {
    "renderMode": 2,
    "redirectTo": "/HobbIA/actividades/menu",
    "route": "/HobbIA/actividades"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/actividades/menu"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/actividades/editar"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/actividades/nuevo"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/actividades/relacionar"
  },
  {
    "renderMode": 2,
    "redirectTo": "/HobbIA/actividades/menu",
    "route": "/HobbIA/actividades/**"
  },
  {
    "renderMode": 2,
    "redirectTo": "/HobbIA/proveedor/menu",
    "route": "/HobbIA/proveedor"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/proveedor/menu"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/proveedor/gestionar"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/proveedor/nuevo"
  },
  {
    "renderMode": 2,
    "redirectTo": "/HobbIA/proveedor/menu",
    "route": "/HobbIA/proveedor/**"
  },
  {
    "renderMode": 2,
    "redirectTo": "/HobbIA/examenes/menu",
    "route": "/HobbIA/examenes"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/examenes/menu"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/examenes/editarcuestionario"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/examenes/nuevocuestionario"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/examenes/realizarcuestionario"
  },
  {
    "renderMode": 2,
    "redirectTo": "/HobbIA/examenes/menu",
    "route": "/HobbIA/examenes/**"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/estadisticas"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/login"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/menuprincipal"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/olvidarcontrasena"
  },
  {
    "renderMode": 2,
    "redirectTo": "/HobbIA/perfil/ver",
    "route": "/HobbIA/perfil"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/perfil/ver"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/perfil/modificarperfil"
  },
  {
    "renderMode": 2,
    "redirectTo": "/HobbIA/perfil/ver",
    "route": "/HobbIA/perfil/**"
  },
  {
    "renderMode": 2,
    "route": "/HobbIA/registrarse"
  },
  {
    "renderMode": 2,
    "redirectTo": "/HobbIA/login",
    "route": "/HobbIA/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5255, hash: '94df0d6adaae233f6730b28b81da607bc79ade667952821aadb2539024e57ddf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1032, hash: 'dc8fc28d6a6724042e1b1905da1aa51a579e0df71ec41023156985ccfb3478a7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'actividades/editar/index.html': {size: 16951, hash: '17d23f77cc101ec707728720481296dd59ae6b231e1dcfb921eb25bdeb11f71e', text: () => import('./assets-chunks/actividades_editar_index_html.mjs').then(m => m.default)},
    'proveedor/nuevo/index.html': {size: 41426, hash: '49c35ad3b8c3c4f1d65029f1252366ac02e9c4793d32efe836771970ee091a4d', text: () => import('./assets-chunks/proveedor_nuevo_index_html.mjs').then(m => m.default)},
    'actividades/menu/index.html': {size: 42223, hash: 'b1a91b272ecd95cf81742c976d2fd5b69cf1917e9f912e9674074010494fae86', text: () => import('./assets-chunks/actividades_menu_index_html.mjs').then(m => m.default)},
    'examenes/realizarcuestionario/index.html': {size: 25472, hash: 'e4894bac87841cdbb2b9da7c6eea9de3949904c07791088eb3c472ee001fa2c2', text: () => import('./assets-chunks/examenes_realizarcuestionario_index_html.mjs').then(m => m.default)},
    'olvidarcontrasena/index.html': {size: 15197, hash: '75b0057f46f7332fb2112adc264373e78e5fe5a3cf55ade15fc3fad1d452f42e', text: () => import('./assets-chunks/olvidarcontrasena_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 16362, hash: '23035cf953afe70253b6bc3ff1388195f1e0486097e4a4c23e151d33a0db59d7', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'proveedor/gestionar/index.html': {size: 65155, hash: 'cede215ae62d88c6814ad982a7542b8ebefe7d30d42e5ec4cf372325a77bcb3f', text: () => import('./assets-chunks/proveedor_gestionar_index_html.mjs').then(m => m.default)},
    'perfil/modificarperfil/index.html': {size: 20884, hash: '0c88985e3f9e32134aef3653d49e542f6325bace945910d4a92c676557371599', text: () => import('./assets-chunks/perfil_modificarperfil_index_html.mjs').then(m => m.default)},
    'actividades/nuevo/index.html': {size: 31300, hash: '4458785f5d3b2fa3bbf0b625147076b058d68e27eb77de45670839605843c074', text: () => import('./assets-chunks/actividades_nuevo_index_html.mjs').then(m => m.default)},
    'proveedor/menu/index.html': {size: 59037, hash: '776d4ac30e18810ad80a33acbfe85cfa5021bb0f051f86c5af44ee92958b8a6d', text: () => import('./assets-chunks/proveedor_menu_index_html.mjs').then(m => m.default)},
    'perfil/ver/index.html': {size: 17462, hash: '686530a303536a2b466ae9ccffbf9c18748c007c1a54cec4dd8806727fad32af', text: () => import('./assets-chunks/perfil_ver_index_html.mjs').then(m => m.default)},
    'estadisticas/index.html': {size: 28695, hash: '7a638f450083a99142fe40449c2b1f67d0e28a9f091982a331f4576f74a8f041', text: () => import('./assets-chunks/estadisticas_index_html.mjs').then(m => m.default)},
    'examenes/editarcuestionario/index.html': {size: 31801, hash: 'e74a7504b4e1b42e709b4257c7a47686014c39839f173b0da3c55b2616e29da9', text: () => import('./assets-chunks/examenes_editarcuestionario_index_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 14134, hash: 'f3f5692786879009d91ad21d5ad28f7b2f9dbf0692ff95aadb4f0fd37c5a33ed', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
    'examenes/nuevocuestionario/index.html': {size: 24134, hash: 'efec3f02e8057fe5591c882e6afe457e86ae7a1e6d1dc85f131ecc8e84b84c94', text: () => import('./assets-chunks/examenes_nuevocuestionario_index_html.mjs').then(m => m.default)},
    'actividades/relacionar/index.html': {size: 27481, hash: 'cdb54ea5bf2a9edf99aa5194a9a68afb912b1a6198f42213c5769bb70af6287b', text: () => import('./assets-chunks/actividades_relacionar_index_html.mjs').then(m => m.default)},
    'examenes/menu/index.html': {size: 27255, hash: '53184335c0a645aa86ec89d8365b05f7355d2cda8cfdb47eefefcd84300afb9f', text: () => import('./assets-chunks/examenes_menu_index_html.mjs').then(m => m.default)},
    'menuprincipal/index.html': {size: 26499, hash: 'd3b68d47b3489381f035d779661e1ecfeb8e254bd772e94db182a57096e08431', text: () => import('./assets-chunks/menuprincipal_index_html.mjs').then(m => m.default)},
    'styles-6RWN3OCN.css': {size: 261857, hash: 'OmS4Rr7et44', text: () => import('./assets-chunks/styles-6RWN3OCN_css.mjs').then(m => m.default)}
  },
};
