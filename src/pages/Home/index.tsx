/*
 * @Author: hyy
 * @Date: 2020-12-30 09:01:59
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-23 09:52:29
 */
import React from 'react'
import {useObserver} from 'mobx-react-lite'
import {useStore} from '../../store'

const Home:React.FC = ()=> {
  const {testStore} = useStore()
    
   
 
  
   
  return useObserver(()=>{
    const {name,num,data,datas,setNum} = testStore
    const handleClick = ()=>{
   console.log('event');
  setNum(1)
 }
    return (<>
    <div>
      <div >{name}</div>
      <div onClick={()=>{handleClick()}}>{num}</div>
      <div>{datas.length}</div>
    </div>
    </>)
  })
}
export default Home