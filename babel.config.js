module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: [
    [
      '@babel/plugin-proposal-pipeline-operator',
      { proposal: 'hack', topicToken: '%' },
    ],
  ],
  ignore: ['dist/**/*.test.js'],
};
