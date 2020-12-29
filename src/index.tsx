import React from 'react'
import ReactDom from 'react-dom'
import {Route,Link,Redirect,Switch} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'

import history from './history'

const App = ()=>{
  return(
    <ConnectedRouter history={history}>
     

      <Switch>
        <Route path="/"/>
      </Switch>
    </ConnectedRouter>
  )
}

ReactDom.render(<App />,document.getElementById("root"))