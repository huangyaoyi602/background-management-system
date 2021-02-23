/*
 * @Author: hyy
 * @Date: 2020-12-31 10:33:17
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-22 16:06:12
 */
import React from 'react'
import {Route,Router} from 'react-router'
import {Link,Switch} from 'react-router-dom'

import {history} from './stores/router'
import Home from './pages/Home'


const App:React.FC = ()=>{
  return(
    <Router history={history}>      
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
} 

export default App