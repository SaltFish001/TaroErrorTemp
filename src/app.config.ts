export default defineAppConfig({
  pages: ['pages/stats/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarTextStyle: 'white',
    navigationStyle: 'custom',
  },
  usingComponents: {
    'ec-canvas': '../../components/ec-canvas/ec-canvas',
  },
  lazyCodeLoading: 'requiredComponents',
})
