import React,{FC} from 'react'
import {Provider,rootStore} from './models/Root'
import {Route,Link,Redirect,Switch} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'

import history from './history'
import Home from './pages/Home'
import {StoresContext,stores} from './stores'





const App:FC = ()=>{
  return(
   <StoresContext.Provider value={stores}>
      
    <ConnectedRouter history={history}>
      <Home/>

      <Switch>
        <Route path="/"/>
      </Switch>
    </ConnectedRouter>
    </StoresContext.Provider>
  )
}

export default App