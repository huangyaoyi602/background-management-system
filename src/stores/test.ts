/*
 * @Author: hyy
 * @Date: 2020-12-30 13:14:49
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-31 10:27:29
 */
import { action,computed,decorate, observable } from "mobx";
 
export interface Test{
  time:string,
  name:string,
  title:string,
  article:string
}

export class TestStore {
  @observable test:Test = {
    time:'2020/12/29',
    name:'hyy',
    title:'mobx测试',
    article:'这是一个mobx功能测试'}

  @computed getArticle(){
    return this.test.article
  }

  @action setArticle(str:string){
    this.test.article = str
  }
}

export const STORE_TEST = "testStore"