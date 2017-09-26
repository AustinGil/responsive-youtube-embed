exports.config = {
  namespace: 'responsive-youtube-embed',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['responsive-youtube-embed'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}