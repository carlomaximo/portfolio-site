
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2228, hash: '27574b513498c862c12438ea1d4b9d7c61fa2e32d6b2da814090b8d34eb1402e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: '62a43b5cb540c9cf2ef4a90dcc22436e4b5731c77bbe581e8b0e0b5059dfef98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZPSVTX62.css': {size: 6696, hash: '7EX90TPo8Ew', text: () => import('./assets-chunks/styles-ZPSVTX62_css.mjs').then(m => m.default)}
  },
};
