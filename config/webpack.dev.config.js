/*
 * @Author: hyy
 * @Date: 2020-12-29 14:51:19
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-29 16:14:27
 */
const { smart } = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = smart(base, {
  mode: 'development',
  // devtool: 'inline-soruce-map'
})