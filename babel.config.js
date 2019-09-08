module.exports = api => {
  api.cache(true)

  const presets = [
    ['@babel/preset-env', { targets: 'last 1 chrome version', useBuiltIns: 'usage', corejs: 3 }],
    ['@babel/preset-react'],
    ['@babel/preset-typescript'],
    ['@emotion/babel-preset-css-prop']
  ]

  const plugins = [
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@loadable/babel-plugin']
  ]

  return { presets, plugins }
}
