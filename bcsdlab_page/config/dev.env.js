'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"https://api.koreatech.in/"',
  INTERNAL_API: '"https://api.internal.bcsdlab.com/"'
})
