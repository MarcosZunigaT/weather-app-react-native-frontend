module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-flow',
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-flow-strip-types'
  ]
};
