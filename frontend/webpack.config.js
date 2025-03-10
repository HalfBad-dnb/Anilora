import webpack from 'webpack';

/** @type {import('webpack').Configuration} */
export default {
  // other configurations...
  resolve: {
    fallback: {
      "global": false,
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      global: 'global'
    })
  ]
};
