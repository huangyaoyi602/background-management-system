/*
 * @Author: hyy
 * @Date: 2021-02-22 14:45:53
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-22 15:23:25
 */
import testStore,{TestStore} from './testStore'

export type RootStore = {
  testStore:TestStore
}

const rootStore:RootStore={
  testStore
}

export default rootStore