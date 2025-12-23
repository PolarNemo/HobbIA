
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/actividades/menu",
    "route": "/actividades"
  },
  {
    "renderMode": 2,
    "route": "/actividades/menu"
  },
  {
    "renderMode": 2,
    "route": "/actividades/editar"
  },
  {
    "renderMode": 2,
    "route": "/actividades/nuevo"
  },
  {
    "renderMode": 2,
    "route": "/actividades/relacionar"
  },
  {
    "renderMode": 2,
    "redirectTo": "/actividades/menu",
    "route": "/actividades/**"
  },
  {
    "renderMode": 2,
    "redirectTo": "/examenes/menu",
    "route": "/examenes"
  },
  {
    "renderMode": 2,
    "route": "/examenes/menu"
  },
  {
    "renderMode": 2,
    "route": "/examenes/editarcuestionario"
  },
  {
    "renderMode": 2,
    "route": "/examenes/nuevocuestionario"
  },
  {
    "renderMode": 2,
    "route": "/examenes/realizarcuestionario"
  },
  {
    "renderMode": 2,
    "redirectTo": "/examenes/menu",
    "route": "/examenes/**"
  },
  {
    "renderMode": 2,
    "route": "/estadisticas"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/menuprincipal"
  },
  {
    "renderMode": 2,
    "route": "/olvidarcontrasena"
  },
  {
    "renderMode": 2,
    "redirectTo": "/perfil/ver",
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "route": "/perfil/ver"
  },
  {
    "renderMode": 2,
    "route": "/perfil/modificarperfil"
  },
  {
    "renderMode": 2,
    "redirectTo": "/perfil/ver",
    "route": "/perfil/**"
  },
  {
    "renderMode": 2,
    "route": "/registrarse"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5222, hash: '3026792b3e75ef0015a44e9c1a9e039f8ac921cbc02014efa0e7f912807831a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 999, hash: 'b66f0de8f974a20d56692e955b18fc7c68cf1ce2f2d09f2a278f4048b41c0b80', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'actividades/editar/index.html': {size: 16918, hash: '88408da80f4da202d7348a868662d43b5b89dd69be846dda155044a8b5bd4ceb', text: () => import('./assets-chunks/actividades_editar_index_html.mjs').then(m => m.default)},
    'examenes/editarcuestionario/index.html': {size: 31768, hash: '17b47d2fa451d7bba6674713e9fc0be6df2e5592930e8d7a8213525bfaa106ad', text: () => import('./assets-chunks/examenes_editarcuestionario_index_html.mjs').then(m => m.default)},
    'menuprincipal/index.html': {size: 26349, hash: 'f6314a2dcd21bd3de5c70be32f9e5afc14e7e2a37ba1fcb8d14a118b1d703734', text: () => import('./assets-chunks/menuprincipal_index_html.mjs').then(m => m.default)},
    'actividades/menu/index.html': {size: 42151, hash: 'aa87b9739d774683bfb213cff1b1b64fe7a822d20e1b8f64226e3a3e113e2d6d', text: () => import('./assets-chunks/actividades_menu_index_html.mjs').then(m => m.default)},
    'examenes/nuevocuestionario/index.html': {size: 24101, hash: 'b4715575df1d0612fc8c9b20af125f5a8b6051d96b43a5be1f991a52adc6f2fb', text: () => import('./assets-chunks/examenes_nuevocuestionario_index_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 14067, hash: 'c708157be980bf363243c9eeb1c9b1d64eb3cf5032926be8ea66a1668ee01f8e', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
    'examenes/realizarcuestionario/index.html': {size: 25439, hash: '91ad0db436eec4ab250d6fd7217a6949e059d8f327bdfd6f69a1f7be5d25b7c6', text: () => import('./assets-chunks/examenes_realizarcuestionario_index_html.mjs').then(m => m.default)},
    'perfil/ver/index.html': {size: 17429, hash: '9bf5b5c35047e78180277e1cea6434a7760968f9622810a0433ce94d2082750a', text: () => import('./assets-chunks/perfil_ver_index_html.mjs').then(m => m.default)},
    'actividades/relacionar/index.html': {size: 27448, hash: '64619a56bbc066269486faad9ea8f6da7ee8ccc2f9bbe1877f817dec7acd7dbb', text: () => import('./assets-chunks/actividades_relacionar_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 16261, hash: '24e36014f34bf598f5a0692ede905e51dd35e661efa6c79e93082ec19b60876a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'olvidarcontrasena/index.html': {size: 15130, hash: '5a992f219093fd785b1a51fceac9626f88103b4286bc5aa003d3601e499a946a', text: () => import('./assets-chunks/olvidarcontrasena_index_html.mjs').then(m => m.default)},
    'perfil/modificarperfil/index.html': {size: 20851, hash: '937251e91f3792392729519c7dbde65114ed51c2c99ffb5f314a4f05935cdab7', text: () => import('./assets-chunks/perfil_modificarperfil_index_html.mjs').then(m => m.default)},
    'examenes/menu/index.html': {size: 27222, hash: '4da5b7666795fa7b3c9e129df304f5cf051d0d4040b39573a03b89a25b19f25f', text: () => import('./assets-chunks/examenes_menu_index_html.mjs').then(m => m.default)},
    'estadisticas/index.html': {size: 28662, hash: '959c3bb80f78881a21737495608ca892997f835692f13262202224547b2d08aa', text: () => import('./assets-chunks/estadisticas_index_html.mjs').then(m => m.default)},
    'actividades/nuevo/index.html': {size: 31267, hash: '0b0a4a9b55517f8d8fc6d804cde6b859e799c9d7e17dd6fb4bd7b962494cd827', text: () => import('./assets-chunks/actividades_nuevo_index_html.mjs').then(m => m.default)},
    'styles-6RWN3OCN.css': {size: 261857, hash: 'OmS4Rr7et44', text: () => import('./assets-chunks/styles-6RWN3OCN_css.mjs').then(m => m.default)}
  },
};
