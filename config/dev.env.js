'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  COMPUTO_URL: '"http://localhost:3000"',
  AWS_ACCESS_KEY_ID: '"AKIAILZ2YOREUDCNROJQ"',
  AWS_SECRET_ACCESS_KEY: '"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"',
  S3_BUCKET: '"nikhil-test-bucket"',
  S3_REGION: '"ap-south-1"'
})
