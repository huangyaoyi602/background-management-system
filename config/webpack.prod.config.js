/*
 * @Author: hyy
 * @Date: 2020-12-29 14:51:39
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-29 15:49:09
 */
const { smart } = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = smart(base, {
  mode: 'production',
})
