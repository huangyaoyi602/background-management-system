/*
 * @Author: hyy
 * @Date: 2021-01-06 13:16:23
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-06 13:23:49
 */
import {RouterStore as BaseRouterStore,syncHistoryWithStore} from 'mobx-react-router'

import {createHashHistory} from 'history'

export const history = createHashHistory()

export class RouterStore extends BaseRouterStore{
  constructor(){
    super()
    this.history = syncHistoryWithStore(history,this)
  }
}

export const STORE_ROUTER = 'routerStore'