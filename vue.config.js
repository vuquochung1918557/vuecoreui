module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/vuecoreui/' : '/' ,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    }
  },
  transpileDependencies: [
    '@coreui/utils',
    '@coreui/vue'
  ]
}
