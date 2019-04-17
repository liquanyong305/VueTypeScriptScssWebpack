module.exports = {
  publicPath: "distSample",
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
          test: /\.(png|jpg|jpeg|gif)$/,
          loader: 'file-loader',
          options: {
            // ...
            name: '[hash].[ext]',
            outputPath : '/img/',
            publicPath : function(path){
              return '../' + path;
           }
          }
        }
      ]
    }
  }
}
