const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const ExtractTextPlugin = require("extract-text-webpack-plugin")

const tsLoader = {
  test: /\.ts$/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      }
    }
  ]
}

const vueLoader = {
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    loaders: {
      scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
    }
  }
}

const scssLoader = {
  test: /\.scss$/,
  use: [
    'vue-style-loader',
    'css-loader',
    'sass-loader',
  ]
}

const cssLoader = {
  test: /\.css$/,
  use: [
    'vue-style-loader',
    'css-loader',
  ]
}

const alias = {
  vue: 'vue/dist/vue.js',
  components: path.resolve(__dirname, 'src/components/'),
}

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  module: {
    rules: [tsLoader, cssLoader, scssLoader, vueLoader]
  },
  resolve: {
    extensions: [
      '.ts', '.vue', '.js'
    ],
    alias,
    modules: ['src', 'node_modules']
  },
  plugins: [
    new VueLoaderPlugin(),
    // new ExtractTextPlugin('style.css')
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    host: '0.0.0.0',
    disableHostCheck: true
  }
};
