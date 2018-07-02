module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'petto',
      externals: {
        react: 'React'
      }
    }
  }
}
