module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV)

  const env = {
    development: {
      plugins: [[ 'emotion', { sourceMap: true, autoLabel: true } ]]
    },
    production: {
      plugins: [[ 'emotion', { hoist: true } ]]
    }
  }

  const presets = [
    ['@babel/preset-env', { useBuiltIns: 'usage' }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining'
  ]

  return {
    env,
    presets,
    plugins
  }
}
