/*eslint-disable */
const webpack = require('webpack');
const resolvePath = require('./path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const IsDevMode = process.env.NODE_ENV.trim() !== 'production';

// Put hash in asset file names when the build is in production...
const assetFilename = IsDevMode ? '[name].[ext]' : '[name].[hash].[ext]';

// Create hash css filename when build in production...
const cssFilename = IsDevMode ? '[name].css' : '[name].[contenthash].css';
const cssChunkFilename = IsDevMode ? '[id].css' : '[id].[contenthash].css';

module.exports = {
  // Entry point where in webpack first looks and serve as main page
  entry: {
    main: [resolvePath('src', 'index.jsx')],
  },
  // Remove file extension when importing JavaScript files or Modules
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Webpack Plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: `styles/${cssFilename}`,
      chunkFilename: `styles/${cssChunkFilename}`,
    }),
    /**
     * Minified CSS compilation
     */
    new OptimizeCssAssetsPlugin({}),
    new HtmlWebpackPlugin({
      template: resolvePath('src', 'index.html'),
    }),
    new CleanWebpackPlugin(['dist']),
    // Enable Hot module for performance improvement during development
    new webpack.HotModuleReplacementPlugin({}),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
        },
        // Optimize CSS minification
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-3'],
            plugins: ['transform-object-rest-spread'],
          },
        },
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          IsDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        loader: 'file-loader',
        options: {
          name: assetFilename,
          outputPath: 'assets/images',
        },
      },
      {
        test: /\.(otf|tff)$/i,
        loader: 'file-loader',
        options: {
          name: assetFilename,
          outputPath: 'assets/fonts',
        },
      },
    ],
  },
};
