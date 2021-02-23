/*
 * @Author: hyy
 * @Date: 2021-02-22 14:48:13
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-23 09:38:48
 */
import {observable,action,computed} from 'mobx'
// import {ResponseError} from 'superagent'

export class TestStore{
  @observable name = 'xiaoming'
  @observable num = 0
  @observable data = observable.map()
  @observable array:string[] = []

  @computed get datas(){
    return this.name+this.num
  }

  //这个箭头函数是因为this指向问题
  @action.bound setNum  (num:number){
    console.log('set');
    
    this.name = "xiaohong"
    this.num = num+1
    console.log(this);
  }
}

export default new TestStore()

