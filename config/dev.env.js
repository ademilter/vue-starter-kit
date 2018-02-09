'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  PROJECT_NAMESPACE: '"exampleDevStore"', // localStorage store key name
  NODE_ENV: '"development"',
  API_URL: '"http://5a304ec3a871f00012678e6c.mockapi.io/"'
})
