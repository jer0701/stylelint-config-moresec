"use strict"

const rules = require('./rules')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    ...rules,
    // 不允许未知属性
    // "property-no-unknown": true,
  }
}
