import React from 'react'
import { observer } from "mobx-react";
import {useTestStore} from '../../stores'


 function Home() {
   const {test,getArticle,setArticle} = useTestStore()
  return (
    <>
    <div>
      <span>{test.name}</span>
      <span>{test.time}</span>
      <span>{test.title}</span>
      <div>{test.article}</div>
    </div>
    <input type="text" onChange={(e)=>{setArticle(e.target.value)}} />
    <input type="button" onClick={()=>{ console.log(getArticle());
     }} />
    </>
  )
}
export default Home