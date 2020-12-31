/*
 * @Author: hyy
 * @Date: 2020-12-30 11:35:32
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-30 16:05:12
 */
import {createContext,FC,useContext} from 'react'
import {STORE_TEST,TestStore} from './test'

const createStores=()=>{
  return {
    [STORE_TEST]:new TestStore()
  }
}

const stores = createStores()

const StoresContext = createContext(stores)

const useStores = ()=> useContext(StoresContext)

function useTestStore() {
  const {testStore} = useStores()
  return testStore
}

export {
  stores,useTestStore,StoresContext,createStores
}