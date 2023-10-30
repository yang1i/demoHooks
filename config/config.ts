import { menus } from './hooks';


export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  publicPath: '/my-hooks/total/',
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  mode: 'site',
  title: 'myhooks',
  // favicon: '/avatar.png',
//   logo: '/logo.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    myHooks: process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: [
    // { title: '首页', path: '/'},
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
  ],
  menus: {
    // '/': [
    //   {
    //     title: '首页',
    //     path: 'index',
    //   },
    // ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    '/hooks': menus,
  },
};