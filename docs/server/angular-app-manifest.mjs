
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://carlomaximo.github.io/portfolio-site/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2272, hash: 'f76b0f77b92085d63488072387eeeea13a9f578781bbdd59e893f9d87059462e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: '8919ef9c24ffc87e23e4332c4d4fd6ee3de4dfb74017812202ba601f732a738f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZPSVTX62.css': {size: 6696, hash: '7EX90TPo8Ew', text: () => import('./assets-chunks/styles-ZPSVTX62_css.mjs').then(m => m.default)}
  },
};
