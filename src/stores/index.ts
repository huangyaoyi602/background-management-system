/*
 * @Author: hyy
 * @Date: 2020-12-30 11:35:32
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-06 13:28:50
 */
import {createContext,FC,useContext} from 'react'

import {STORE_ROUTER,RouterStore,history} from './router'
import {STORE_TEST,TestStore} from './test'

const createStores=()=>{
  return {
    [STORE_TEST]:new TestStore(),
    [STORE_ROUTER]:new RouterStore()
  }
}

const stores = createStores()

const StoresContext = createContext(stores)

const useStores = ()=> useContext(StoresContext)

function useTestStore() {
  const {testStore} = useStores()
  return testStore
}

function useRouterStore(){
  const {routerStore} = useStores()
  return routerStore
}

export {
  STORE_TEST,
  STORE_ROUTER,
  RouterStore,
  TestStore,
  stores,
  history,
  StoresContext,
  useStores,
  useTestStore,
  useRouterStore
}