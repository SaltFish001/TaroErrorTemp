const path = require('path')

const config = {
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/icons': path.resolve(__dirname, '..', 'src/assets/icons'),
  },
  projectName: 'temp',
  date: '2023-3-27',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    [
      '@tarojs/plugin-html',
      {
        // 包含 `demo-`、`van-` 的类名选择器中的 px 单位不会被解析
        pxtransformBlackList: [/nut-/, /nutui-/, /ZJY_/],
      },
    ],
  ],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  compiler: 'webpack4',
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  sass: {
    resource: [path.resolve(__dirname, '..', 'src/assets/styles/custom_theme.scss')],
    data: `@import "@nutui/nutui-react-taro/dist/styles/variables.scss";`,
  },
  mini: {
    compile: {
      exclude: [path.resolve(__dirname, '..', 'src/components/ec-canvas/echarts.js')],
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  pxtransform: {
    config: {
      selectorBlackList: ['nut-', 'nutui-', 'ZJY_'],
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
