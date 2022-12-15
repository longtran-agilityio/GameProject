// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    'babel-plugin-transform-vite-meta-env',
    '@babel/transform-runtime',
    'babel-plugin-transform-import-meta',
  ],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    'babel-preset-vite',
    '@babel/preset-react',
  ],
}
