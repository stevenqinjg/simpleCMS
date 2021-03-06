import path from 'path'
import { defineConfig } from 'umi'

export default defineConfig({
  favicon: 'favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    immer: true,
    hmr: true,
  },
  devtool: 'source-map',
  antd: {},
  title: 'simpleCMS',
  exportStatic: {},
  base: '/admin/',
  publicPath: '/admin/',
  outputPath: '../server/static/admin',
  theme: {
    'primary-color': '#51B266',
    'btn-primary-bg': "#51B266"
  },
  analytics: {
    ga: 'google analytics code',
  },
  // extraBabelPlugins: [['import', { libraryName: 'zarm', style: true }]],
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    assets: path.resolve(__dirname, 'src/assets/'),
    less: path.resolve(__dirname, 'src/less/'),
  },
  routes: [
    { path: '/', redirect: '/user/login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/user',
          component: '@/pages/user/index',
          routes: [
            {
              path: '/user/login',
              component: '@/pages/user/login',
            },
            { component: '@/pages/404' }
          ],
        },
        { path: '/dashboard', component: '@/pages/dashboard' },
        { path: '/article', component: '@/pages/article' },
        { path: '/draft', component: '@/pages/article' },
        { path: '/release', component: '@/pages/release' },
        { path: '/advert', component: '@/pages/advert' },
        { path: '/payment', component: '@/pages/payment' },
        { path: '/setting', component: '@/pages/setting' },
        { path: '/modify', component: '@/pages/user/modify' },
        { component: '@/pages/404' }
      ],
    },
  ],
})
