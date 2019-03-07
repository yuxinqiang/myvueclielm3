// vue.config.js
// 创建于：2019/2/28
// author：Bradley
const webpack = require('webpack')
// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
module.exports = {
  // Vue CLI 会假设你的应用是被部署在一个域名的根路径上,如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
  // 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
  // 相对 publicPath 的限制: 当使用基于 HTML5 history.pushState 的路由时；当使用 pages 选项构建多页面应用时。以上两种情况下尽量避免使用相对publicPath
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 当运行 build 时生成的生产环境构建文件的目录,默认文件为dist
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'assets',
  // 指定生成的 index.html 的输出路径
  indexPath: 'index.html',
  // 控制生成的静态资源文件名中是否包含 hash 以便更好的控制缓存，默认为true，通过false关闭
  filenameHashing: true,
  // 多页面应用开发时用来控制页面的进口与出口
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },
  // 是否在开发环境下每次进行保存时通过eslint验证，默认为true，会将 lint 错误输出为编译警告，警告仅仅会被输出到命令行，且不会使得编译失败
  // 如果使用 lintOnSave: 'error'会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
  // lintOnSave: true ,
  // 如果要在生产构建时禁用 eslint-loader，进行如下配置即可，这一条和上一条取其一即可，开发坏境我才用的是下面这一条
  // lintOnSave: process.env.NODE_ENV !== 'production',
  lintOnSave: false,
  // lintOnSave通过设置让浏览器 overlay 同时显示警告和错误，
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   }
  // },
  // 是否使用包含运行时编译器的 Vue 构建版本设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件,如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: true,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
  crossorigin: undefined,
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 SRI,如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性
  integrity: false,
  // 默认值为Object | Function，详细配置参考https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views'
      }
    }
  },
  // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作),详细配置https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7
  chainWebpack: (config) => {
  // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    config.optimization
      .splitChunks({
        cacheGroups: {}
      })
    // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    config.module
      .rule('eslint')
      .exclude
      .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
      .end()
    // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    })
  },
  // css的处理
  css: {
    // 当为true时，css文件名可省略 module 默认为 false
    modules: false,
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
    // 默认生产环境下是 true，开发环境下是 false
    extract: false,
    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能,source map是为了定位样式在css文件中位置
    sourceMap: true,
    // 向 CSS 相关的 loader 传递选项
    loaderOptions: {
      css: {
      // 这里的选项会传递给 css-loader
      },
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        // data: `@import "@/variables.scss";`
        data: `@import "@/assets/sass/commonStyle.scss";`
      }
    }
  },
  // 开发环境下单的运行路径配置
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8089,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader
  parallel: require('os').cpus().length > 1,
  // 向 PWA 插件传递选项
  pwa: {},
  // 可以用来传递任何第三方插件选项
  pluginOptions: {}
}
