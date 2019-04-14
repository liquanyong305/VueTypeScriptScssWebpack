module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: "vue-template-loader",
          exclude: /index.html/,
          options: {
            transformAssetUrls: {
              img: 'src'
            }
          }
        },
        // Make sure to add a loader that can process the asset files
        {
          test: /\.(jpg|png|gif)/,
          loader: 'file-loader',
          options: {
            // ...
          }
        }
      ]
    }
  }
}
