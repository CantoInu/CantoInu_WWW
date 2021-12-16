const withPlugins = require('next-compose-plugins')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const basePath = ''

const nextConfig = {
  basePath: basePath,
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'))
    config.resolve.modules.push(path.resolve('./components'))
    config.resolve.modules.push(path.resolve('./pages'))
    config.resolve.modules.push(path.resolve('./assets'))
    config.resolve.modules.push(path.resolve('./styles'))
    return config
  },
  // NOTE: client-side keys must be included here
  publicRuntimeConfig: {},
}

module.exports = withPlugins([], nextConfig)
