/*
 * @Author: hyy
 * @Date: 2020-12-30 09:01:59
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-22 15:59:45
 */
import React from 'react'
import ReactDom from 'react-dom'

import App from './App'
import {StoreProvider} from './store'



ReactDom.render(
<StoreProvider>
  <App />
</StoreProvider>
,document.getElementById("root"))