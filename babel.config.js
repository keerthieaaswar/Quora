module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.tsx', '.json'],
        alias: {
          'assets': './src/assets',
          'components': './src/components',
          'config': './src/config',
          'navigation': './src/navigation',
          'utilities': './src/utilities',
          'views': './src/views',
        },
      },
    ],
  ],
};
