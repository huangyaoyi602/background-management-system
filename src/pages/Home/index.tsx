import React from 'react'
import {useTestStore} from '../../stores'
import {observer} from 'mobx-react'
// import {TestStore} from '../../stores/test'

const Home = ()=> {
   const {count,test,getArticle,setArticle,addCount} = useTestStore()
  //  console.log(getArticle());
  console.log(count,test);
  
   
  return (
    <>
    <div>
      <span>{test.name}</span>
      <span>{test.time}</span>
      <span>{test.title}</span>
      <div>{test.article}</div>
    </div>
    <input type="text" onChange={(e)=>setArticle(e.target.value)} />
    <input type="button" onClick={()=>{ console.log(getArticle)}} />
    <button onClick={addCount}>{count}</button>
    </>
  )
}
export default observer(Home)