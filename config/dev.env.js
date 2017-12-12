'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  PROJECT_NAMESPACE: '"example"', // localStorage store key name
  NODE_ENV: '"development"',
  API_URL: '"http://clearsight.protel.com.tr/api"',
  PORT: '"9000"'
})
