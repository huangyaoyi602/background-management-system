import React from 'react'
import {Route,Router,Redirect} from 'react-router'
import {Link,Switch} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import { observer } from "mobx-react";

import {history} from './stores/router'
import Home from './pages/Home'
import {StoresContext,stores} from './stores'
import { Provider } from 'mobx-react'


const App = ()=>{
  return(
    <Provider {...stores}>
   <StoresContext.Provider value={stores}>
    <Router history={history}>      
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
    </StoresContext.Provider>
    </Provider>
  )
} 

export default App