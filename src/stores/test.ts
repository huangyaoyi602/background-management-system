/*
 * @Author: hyy
 * @Date: 2020-12-30 13:14:49
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-07 16:37:45
 */
import {observable,computed,action } from "mobx";
 
export interface Test{
  time:string,
  name:string,
  title:string,
  article:string
}

export class TestStore {

 @observable count = 0
 @observable test:Test = {
    time:'2020/12/29',
    name:'hyy',
    title:'mobx测试',
    article:'这是一个mobx功能测试'
  }


@computed get getArticle(){
    return this.test.article
  }

@action.bound setArticle(str:string){
    this.test = {...this.test,article:str}
  }
@action.bound addCount(){
    this.count++
    console.log(this.count);
    
  }
}

export const STORE_TEST = "testStore"